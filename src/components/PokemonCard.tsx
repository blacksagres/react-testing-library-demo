import { useState } from "react";

interface PokemonCardProps {
  name: string;
  sprite: string;
}

export const PokemonCard = (props: PokemonCardProps): JSX.Element => {
  const { name, sprite } = props;
  const [loadError, setLoadError] = useState(false);

  const handleLoadError = () => {
    setLoadError(true);
  };

  const handleLoadSuccess = () => {
    setLoadError(false);
  };

  if (loadError) {
    return <p>This image could not be loaded.</p>;
  }

  return (
    <div data-testid="pokemon-card-container">
      <h2 className="pokemon-card-title">{name}</h2>
      <img
        className="pokemon-card-image bouncy"
        data-testid={`pokemon-sprite-${name}`}
        src={sprite}
        alt={`pokemon-sprite-${name}`}
        onError={handleLoadError}
        onLoad={handleLoadSuccess}
      />
    </div>
  );
};
