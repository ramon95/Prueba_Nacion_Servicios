import React, { useEffect } from "react";
import { getPokemons } from "../api/pokeApi";
import { setPokemons } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonsList } from "../components/pokemonList";

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.list);

    useEffect(() => {
        getPokemons().then((response) => {
            dispatch(setPokemons(response.results));
        })
    },[])

    return(
        <div className="px-10 py-10">
            <PokemonsList pokemons={pokemons}/>
        </div>
    );
};

export default Home;
