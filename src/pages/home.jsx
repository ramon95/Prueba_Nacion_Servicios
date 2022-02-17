import React, { useEffect } from "react";
import { getPokemons, getPokemonsWithDetails } from "../api/pokeApi";
import { setError, setLoading, setPokemons } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonsList } from "../components/pokemonList";
import { Loading } from "../components/loading";

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.list);
    const loading = useSelector(state => state.loading);

    const getPokemonsInfo = () => {
        dispatch(setLoading());
        getPokemons()
        .then((response) => {
            const pokemonList = response.results;
            return Promise.all(
                pokemonList.map((pokemon) => getPokemonsWithDetails(pokemon.url))
                );
            })
        .then((pokemonsResponse) => {
            dispatch(setPokemons(pokemonsResponse));
            dispatch(setLoading());
        })
        .catch((error) => {
            dispatch(setError({ message: "Ocurrio un error", error }));
        });
    };

    useEffect(() => {
        getPokemonsInfo();
    },[]);

    return(
        <div className="px-10 py-10">
            {loading ? (
                <div className="h-[90vh] flex justify-center items-center">
                    <Loading />
                </div>
            ) : (
                <PokemonsList pokemons={pokemons}/>
            )}
        </div>
    );
};

export default Home;
