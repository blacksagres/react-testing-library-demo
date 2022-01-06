import { useAsync } from "react-use";
import { getPokemon } from "../api/pokemon.api";
import { Pokemon } from "../types/pokemon.type";

export const usePokemon = (
  name: string
): {
  pokemon: Pokemon | undefined;
  loading: boolean;
  error: Error | undefined;
} => {
  const { value, loading, error } = useAsync(() => getPokemon(name));

  return { pokemon: value, loading, error };
};
