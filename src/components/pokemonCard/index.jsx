import React from "react";
import { BoxType } from "../boxType";

export const PokemonCard = ({ pokemon }) => {
    return(
        <div className="w-4/5 border rounded px-2 py-2">
            <div className="grid grid-cols-2">
                <p>{pokemon.id}</p>
                <p className="text-right capitalize">{pokemon.name}</p>
            </div>
            <div className="flex justify-center">
                <img src={pokemon.sprites.front_default}/>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3">
                {pokemon.types.map((type,index) => (
                    <BoxType key={`pokemon-${pokemon.id}-${index}`} type={type.type.name}/>
                ))}
            </div>
        </div>
    );
};
