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