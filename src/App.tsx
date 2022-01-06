import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  return (
    <div className="App">
      <PokemonCard pokemonName="ditto" />
    </div>
  );
}

export default App;
