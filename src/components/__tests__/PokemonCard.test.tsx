// import API mocking utilities from Mock Service Worker

import { PokemonCard } from "../PokemonCard";

// import react-testing methods
import { render, waitFor, screen } from "@testing-library/react";

test("loads and displays ditto", async () => {
  render(<PokemonCard pokemonName="hello" />);

  // fireEvent.click(screen.getByText("Load Greeting"));

  await waitFor(() => screen.getByTestId("pokemon-sprite-ditto"));

  expect(screen.getByTestId("pokemon-sprite-ditto")).toHaveTextContent(
    "hello there"
  );
});