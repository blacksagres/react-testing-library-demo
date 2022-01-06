import { useAsync } from "react-use";
import { getPokemon } from "../api/pokemon.api";
import { usePokemon } from "../hooks/usePokemon.hook";

interface PokemonCardProps {
  pokemonName: string;
}

export const PokemonCard = (props: PokemonCardProps): JSX.Element => {
  const { pokemon, loading } = usePokemon(props.pokemonName);

  return (
    <div data-testid="pokemon-card-container">
      <h2>{pokemon?.name}</h2>
      <img
        data-testid={`pokemon-sprite-${props.pokemonName}`}
        src={pokemon?.sprites?.front_default}
        alt={`pokemon-sprite-${props.pokemonName}`}
      />
    </div>
  );
};
