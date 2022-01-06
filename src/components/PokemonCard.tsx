import { useAsync } from "react-use";
import { getPokemon } from "../api/pokemon.api";
import { usePokemon } from "../hooks/usePokemon.hook";

interface PokemonCardProps {
  name: string;
  sprite: string;
}

export const PokemonCard = (props: PokemonCardProps): JSX.Element => {
  const { name, sprite } = props;

  return (
    <div data-testid="pokemon-card-container">
      <h2>{name}</h2>
      <img
        data-testid={`pokemon-sprite-${name}`}
        src={sprite}
        alt={`pokemon-sprite-${name}`}
      />
    </div>
  );
};
