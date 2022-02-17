import { getPokemons, getPokemonsWithDetails } from "../../api/pokeApi";
import { CLEAR_ERROR, SET_ERROR, SET_LOADING, SET_POKEMONS } from "./type";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
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

export const getPokemonsWithDetailsAction = () => (dispatch) => {
  dispatch(setLoading());
  getPokemons()
    .then((response) => {
      const pokemonList = response.results;
      return Promise.all(pokemonList.map((pokemon) => getPokemonsWithDetails(pokemon.url)));
    })
    .then((pokemonsResponse) => {
      dispatch(setPokemons(pokemonsResponse));
      dispatch(setLoading());
    })
    .catch((error) => {
      dispatch(setError({ message: "Ocurrio un error", error }));
    });
}