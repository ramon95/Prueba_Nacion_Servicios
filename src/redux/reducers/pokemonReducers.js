import { CLEAR_ERROR, SET_ERROR, SET_LOADING, SET_POKEMONS, SET_POKEMON } from "../actions/type";

const initialState = {
    list: [],
    pokemon: {},
    error: "",
    loading: false,
};

const pokemonReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SET_POKEMONS:
            return { ...state, list: action.payload };
        case SET_POKEMON:
            return { ...state, pokemon: action.payload };
        case SET_ERROR:
            return { ...state, error: action.payload.message };
        case CLEAR_ERROR:
            return { ...state, error: "" };
        case SET_LOADING:
            return { ...state, loading: !state.loading };
        default:
            return { ...state };
    }
};

export default pokemonReducer;