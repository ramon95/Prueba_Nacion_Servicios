import { 
  getPokemons,
  getPokemonsTpyes,
  getPokemonsWithDetailsURL,
  getPokemonWithDetails 
} from "../../api/pokeApi";
import { 
  CLEAR_ERROR,
  SET_ERROR,
  SET_LOADING,
  SET_POKEMONS,
  SET_POKEMON,
  SET_TYPES, 
  SET_POKEMONS_FILTER 
} from "./type";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
});

export const setPokemon = (payload) => ({
    type: SET_POKEMON,
    payload
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setTypes = (payload) => ({
  type: SET_TYPES,
  payload,
});

export const setPokemonsFilter = (payload) => ({
  type: SET_POKEMONS_FILTER,
  payload,
});

export const getPokemonsWithDetailsAction = () => (dispatch) => {
  dispatch(setLoading());
  getPokemonsTpyes()
  .then((response) => {
    dispatch(setTypes(response.results));
  })
  .catch((error) => {
    dispatch(setError({ message: "Ocurrio un error", error }));
  });

  getPokemons()
  .then((response) => {
    const pokemonList = response.results;
    return Promise.all(pokemonList.map((pokemon) => getPokemonsWithDetailsURL(pokemon.url)));
  })
  .then((pokemonsResponse) => {
    dispatch(setPokemons(pokemonsResponse));
    dispatch(setLoading());
  })
  .catch((error) => {
    dispatch(setError({ message: "Ocurrio un error", error }));
  });

};

export const getPokemonWithDetailsAction = (pokemonId) => (dispatch) => {
  dispatch(setLoading());
  getPokemonWithDetails(pokemonId)
  .then((response) => {
    dispatch(setPokemon(response));
    dispatch(setLoading());   
  })
  .catch((error) => {
    dispatch(setError({ message: "Ocurrio un error", error }));
  });
}

export const getPokemonsFilter = (pokemonType, pokemos) => (dispatch) => {
  const pokemonFilter = [];
  pokemos.forEach(pokemon => {
    let band = false;
    pokemon.types.forEach(type => {
      if (type.type.name === pokemonType) {
        band = true;
      }
    });
    if (band) {
      pokemonFilter.push(pokemon)
    }
  });
  dispatch(setPokemonsFilter(pokemonFilter));
}