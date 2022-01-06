import { usePokemon } from "../hooks/usePokemon.hook";
import { PokemonCard } from "./PokemonCard";

interface PokemonCardProps {
  pokemonName: string;
}

export const SmartPokemonCard = (props: PokemonCardProps): JSX.Element => {
  const { pokemon, loading } = usePokemon(props.pokemonName);

  if (loading || !pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <PokemonCard name={pokemon.name} sprite={pokemon?.sprites.front_default} />
  );
};
