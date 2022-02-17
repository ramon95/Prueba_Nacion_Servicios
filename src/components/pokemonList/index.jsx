import React from "react";
import { PokemonCard } from "../pokemonCard";

export const PokemonsList = ({ pokemons }) => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
            {pokemons.map((pokemon, index) => (
                <PokemonCard key={`pokemon-${pokemon.id}-${index}`} pokemon={pokemon}/>
            ))}
        </div>
    );
};
