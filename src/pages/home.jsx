import { getPokemons } from "../api/pokeApi";
import React, { useEffect } from "react";
import { PokemonCard } from "../components/pokemonCard";

const Home = () => {
    useEffect(() => {
        getPokemons().then((response) => {
            console.log(response);
        })
    },[])

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 pt-10 gap-y-10">
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
        </div>
    );
};

export default Home;
