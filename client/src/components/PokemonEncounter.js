import React, { useState } from "react";
import { Locations } from "./Locations";
import { PokemonData } from "./PokemonData";
import { PokemonFound } from "./PokemonFound";
import { NoPokemonFound } from "./NoPokemonFound";

export const PokemonEncounter = ({ locationUrl }) => {
  const [encounterEnded, setEncounterEnded] = useState(false);

  const handleEncounterEnd = () => {
    setEncounterEnded(true);
  };

  return (
    <div>
      {encounterEnded ? (
        <Locations onSelect={() => setEncounterEnded(false)} />
      ) : (
        <PokemonData
          locationUrl={locationUrl}
          setEncounterEnded={handleEncounterEnd}
        />
      )}
    </div>
  );
};
