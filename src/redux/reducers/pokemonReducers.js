import { 
    CLEAR_ERROR,
    SET_ERROR,
    SET_LOADING,
    SET_POKEMONS,
    SET_POKEMON,
    SET_TYPES,
    SET_POKEMONS_FILTER
} from "../actions/type";

const initialState = {
    list: [],
    pokemon: {},
    pokemonsFilter: [],
    error: "",
    types: [],
    loading: false,
};

const pokemonReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SET_POKEMONS:
            return { ...state, list: action.payload };
        case SET_POKEMONS_FILTER:
            return { ...state, pokemonsFilter: action.payload };
        case SET_POKEMON:
            return { ...state, pokemon: action.payload };
        case SET_ERROR:
            return { ...state, error: action.payload.message };
        case CLEAR_ERROR:
            return { ...state, error: "" };
        case SET_LOADING:
            return { ...state, loading: !state.loading };
        case SET_TYPES:
            return { ...state, types: action.payload };
        default:
            return { ...state };
    }
};

export default pokemonReducer;