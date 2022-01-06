import axios from "axios";

export function getPokemon(name: string) {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.data);
}
