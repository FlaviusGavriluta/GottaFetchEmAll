import React from "react";

export const PokemonFound = ({ pokemon, onEncounterEnd }) => {
  const handleEncounterEnd = () => {
    onEncounterEnd(true);
  }

  return (
    <div>
      <h2>You encountered a wild {pokemon.name}!</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <button onClick={handleEncounterEnd}>End encounter</button>
    </div>
  );
};
