import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { Loading } from "../components/loading";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonWithDetailsAction } from '../redux/actions';
import { CardPokemonDetail } from "../components/cardPokemonDetail";

const PokemonDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(getPokemonWithDetailsAction(id));
    },[]);

    return(
        <div className="px-10 py-10">
            {loading ? (
                <div className="h-[90vh] flex justify-center items-center">
                    <Loading />
                </div>
            ) : (
                <CardPokemonDetail pokemon={pokemon}/>
            )}
        </div>
    );
};

export default PokemonDetail;
