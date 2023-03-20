import React, { useState, useEffect } from "react";

export const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/location/");
        const data = await response.json();
        setLocations(data.results);
        console.log(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(locations);

  return (
  <div id="root">
    <h1>Locations</h1>
    {locations.map(location => (
      <div key={location.name}>
        <button>{location.name}</button>
      </div>
    ))}
  </div>
  );
};
