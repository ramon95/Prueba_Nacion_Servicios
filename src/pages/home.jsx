import React, { useEffect } from "react";
import { Loading } from "../components/loading";
import { useDispatch, useSelector } from 'react-redux';
import { PokemonsList } from "../components/pokemonList";
import { getPokemonsWithDetailsAction } from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.list);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(getPokemonsWithDetailsAction());
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
