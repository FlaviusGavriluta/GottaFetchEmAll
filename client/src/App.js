import React, { useState } from "react";
import { Locations } from "./components/Locations";
import { PokemonData } from "./components/PokemonData";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => setSelectedLocation(location);

  return (
    <div>
      <PokemonData locationUrl={selectedLocation} />
      <Locations onSelect={handleLocationSelect} />
    </div>
  );
};

export default App;
