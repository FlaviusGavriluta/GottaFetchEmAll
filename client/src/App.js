import React, { useState } from "react";
import { Locations } from "./components/Locations";
import { PokemonData } from "./components/PokemonData";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [encounterEnded, setEncounterEnded] = useState(true);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setEncounterEnded(false);
  };

  const handleEncounterEnd = () => {
    setSelectedLocation(null);
    setEncounterEnded(true);
  };

  return (
    <div>
      {encounterEnded ? (
        <Locations onSelect={handleLocationSelect} />
      ) : (
        <PokemonData
          locationUrl={selectedLocation}
          setEncounterEnded={handleEncounterEnd}
        />
      )}
    </div>
  );
};

export default App;
