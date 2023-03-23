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
        <h2 className="m-5">Please select city or place</h2>
        <div className="row justify-content-md-center">
          {locations.map((location) => (
            <div key={location.name} className="col-md-auto m-3">
              <button
                className="btn text-info"
                onClick={() => onSelect(location.url)}
              >
                {location.name.charAt(0).toUpperCase() +
                  location.name.slice(1)}
                &nbsp;<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-fast-forward-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
                  <path d="M4.271 5.055a.5.5 0 0 1 .52.038L8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .271-.445Z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
