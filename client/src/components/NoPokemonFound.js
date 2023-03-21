import React from "react";

export const NoPokemonFound = ({ onTryAnotherLocation }) => {
  const handleTryAnotherLocation = () => {
    onTryAnotherLocation(true);
  };

  return (
    <div>
      <h2>This location doesn't seem to have any pokémon.</h2>
      <button onClick={handleTryAnotherLocation}>Try another location</button>
    </div>
  );
};
