import React, { useEffect } from "react";
import { getPokemons, getPokemonsWithDetails } from "../api/pokeApi";
import { setError, setPokemons } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonsList } from "../components/pokemonList";

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.list);

    useEffect(() => {
        getPokemons()
        .then((response) => {
            const pokemonList = response.results;
            return Promise.all(
                pokemonList.map((pokemon) => getPokemonsWithDetails(pokemon.url))
            );
        })
        .then((pokemonsResponse) => {
            dispatch(setPokemons(pokemonsResponse));
        })
        .catch((error) => {
            dispatch(setError({ message: "Ocurrio un error", error }));
        });
    },[]);

    return(
        <div className="px-10 py-10">
            <PokemonsList pokemons={pokemons}/>
        </div>
    );
};

export default Home;
