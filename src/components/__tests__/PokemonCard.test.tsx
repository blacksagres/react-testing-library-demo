import { PokemonCard } from "../PokemonCard";

// import react-testing methods
import { render, waitFor, screen } from "@testing-library/react";

test("loads and displays ditto", async () => {
  render(
    <PokemonCard
      name="ditto"
      sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    />
  );

  await waitFor(() => screen.getByTestId("pokemon-sprite-ditto"));

  expect(screen.getByTestId("pokemon-sprite-ditto").getAttribute("alt")).toBe(
    "pokemon-sprite-ditto"
  );
});
