import React, { useEffect } from "react";

export const PokemonFound = ({ pokemon, ourPokemons, onEncounterEnd }) => {
  const handleEncounterEnd = () => {
    onEncounterEnd(true);
  };

  useEffect(() => {
    console.log(ourPokemons);
  }, []);

  return (
    <div>
      <h2>You encountered a wild {pokemon.name}!</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <button onClick={handleEncounterEnd}>End encounter</button>
    </div>
  );
};
