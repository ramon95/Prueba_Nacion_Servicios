import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsFilter } from "../../redux/actions";

export const Search = ({ types }) => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.list);

    const handleChange = (event) => {
        const pokemonType = event.target.value;
        dispatch(getPokemonsFilter(pokemonType, pokemons));
    };

    return(
        <div className="mb-5">           
            <select name="pokemons_types" id="pokemons_types" onChange={(value) => handleChange(value)}>
                <option>Selected Option</option>
                {types.map((type,index) => (
                    <option className="capitalize" key={`type-${index}`} value={type.name}>{type.name}</option>
                ))}
            </select>
        </div>
    )
};