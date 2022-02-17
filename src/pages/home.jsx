import React, { useEffect } from "react";
import { Loading } from "../components/loading";
import { useDispatch, useSelector } from 'react-redux';
import { PokemonsList } from "../components/pokemonList";
import { getPokemonsWithDetailsAction } from '../redux/actions';
import { Search } from "../components/seacrh";

const Home = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const pokemons = useSelector(state => state.list);
    const loading = useSelector(state => state.loading);
    const pokemonsFilter = useSelector(state => state.pokemonsFilter);

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
                <div>
                    <Search types={types} />
                    <PokemonsList pokemons={pokemonsFilter.length === 0 ? pokemons : pokemonsFilter}/>
                </div>
            )}
        </div>
    );
};

export default Home;
