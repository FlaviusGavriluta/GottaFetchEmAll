import React, { useState, useEffect } from "react";

export const Locations = ({ onSelect }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/location/");
        const data = await response.json();
        setLocations(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="root">
      <div className="container text-center">
        <h1>Choose a location:</h1>
        <div className="row justify-content-md-center">
          {locations.map((location) => (
            <div key={location.name} className="col-md-auto m-3">
              <button
                className="btn btn-primary"
                onClick={() => onSelect(location.url)}
              >
                {location.name.charAt(0).toUpperCase() + location.name.slice(1)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
