import { useAsync } from "react-use";
import { getPokemon } from "../api/pokemon.api";

interface PokemonCardProps {
  pokemonName: string;
}

export const PokemonCard = (props: PokemonCardProps): JSX.Element => {
  const { value, loading } = useAsync(() => getPokemon(props.pokemonName));

  return (
    <div>
      <h2>{value?.name}</h2>
      <img
        data-testid={`pokemon-sprite-${props.pokemonName}`}
        src={value?.sprites?.front_default}
        alt={`pokemon-sprite-${props.pokemonName}`}
      />
    </div>
  );
};
