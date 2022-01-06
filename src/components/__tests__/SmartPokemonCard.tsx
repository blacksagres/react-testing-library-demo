import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SmartPokemonCard } from "../SmartPokemonCard";

const server = setupServer(
  rest.get(`https://pokeapi.co/api/v2/pokemon/ditto`, (req, res, ctx) => {
    return res(
      ctx.json({ name: "squirtle", sprites: { front_default: "hey" } })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays ditto", async () => {
  render(<SmartPokemonCard pokemonName="ditto" />);

  await waitFor(() => screen.getByTestId("pokemon-sprite-squirtle"));

  expect(
    screen.getByTestId("pokemon-sprite-squirtle").getAttribute("alt")
  ).toBe("pokemon-sprite-squirtle");
});
