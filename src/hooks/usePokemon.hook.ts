import { useAsync } from "react-use";
import { getPokemon } from "../api/pokemon.api";
import { Pokemon } from "../types/pokemon.type";

export const usePokemon = (
  name: string
): { pokemon: Pokemon | null; loading: boolean } => {
  const { value, loading } = useAsync(() => getPokemon(name));

  return { pokemon: value, loading };
};
