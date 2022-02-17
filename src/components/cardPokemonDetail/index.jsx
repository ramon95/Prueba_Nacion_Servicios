import React from "react";
import { BoxType } from "../boxType";
import { Link } from "react-router-dom";

export const CardPokemonDetail = ({ pokemon }) => {
    return(
        <div className="grid grid-cols-2">
            <div>
                <Link to="/">
                    {`< Back`}
                </Link>
                <div className="flex mb-10">
                    <div className="text-center mr-12">
                        <h1 className="text-3xl capitalize">{pokemon.name}</h1>
                        <img
                            className="bg-gray_light w-60 mt-5"
                            src={Object.keys(pokemon).length !== 0 ?  pokemon.sprites.front_default : ""}
                            alt={`${pokemon.name}-normal`}
                        />
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl capitalize">{pokemon.name} shiny</h1>
                        <img
                            className="bg-gray_light w-60 mt-5"
                            src={Object.keys(pokemon).length !== 0 ?  pokemon.sprites.front_shiny : ""}
                            alt={`${pokemon.name}-shiny`}
                        />
                    </div>
                </div>
                <div className="bg-box_stats w-4/5 p-5 rounded">
                    <h1 className="text-3xl text-white mb-5">Stats</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        <div>
                            <p>Base Exp.</p>
                            <p>{pokemon.base_experience}</p>
                        </div>
                        <div>
                            <p>Height</p>
                            <p>{pokemon.height}m</p>
                        </div>
                        <div>
                            <p>Weight</p>
                            <p>{pokemon.weight}kg</p>
                        </div>
                        {Object.keys(pokemon).length !== 0 && pokemon.stats.map((stat, index) => (
                            <div key={`stat-${index}`}>
                                <p className="capitalize">{stat.stat.name}</p>
                                <p>{stat.base_stat}</p>
                            </div>
                        ))}
                    </div>
                    <h1 className="text-3xl text-white mt-5 mb-5">Types</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3">
                    {Object.keys(pokemon).length !== 0 && pokemon.types.map((type,index) => (
                        <BoxType key={`pokemon-${pokemon.id}-${index}`} type={type.type.name}/>
                    ))}
                </div>
                </div>
            </div>
            <div>
                <div className="bg-box p-5 rounded">
                    <h1 className="text-3xl mb-5 text-white">Abilities</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5">
                        {Object.keys(pokemon).length !== 0 && pokemon.abilities.map((ability, index) => (
                            <p key={`ability-${index}`} className="capitalize text-xl">{ability.ability.name}</p>
                        ))}
                    </div>
                    <h1 className="text-3xl mb-5 text-white">Moves</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {Object.keys(pokemon).length !== 0 && pokemon.moves.map((move, index) => (
                            <p key={`move-${index}`} className="capitalize text-xl">{move.move.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}