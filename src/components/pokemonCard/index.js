import React from "react";
import { BoxType } from "../boxType";

export const PokemonCard = () => {
    const url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
    return(
        <div className="w-4/5">
            <div className="grid grid-cols-2">
                <p>001</p>
                <p className="text-right">Nombre</p>
            </div>
            <img src={url}/>
            <div className="grid grid-cols-2 md:grid-cols-3">
                <BoxType type="steel"/>
                <BoxType type="steel"/>
                <BoxType type="steel"/>
            </div>
        </div>
    );
};
