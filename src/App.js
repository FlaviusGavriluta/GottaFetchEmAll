import './App.css';
import React, { useState, useEffect } from 'react';
import { OnLocations } from './Components/Locations.js';


function App() {


  const [locations, setLocations] = useState([]);



  useEffect(() => {
    (async function() {
        try {
            const response = await fetch(
                'https://pokeapi.co/api/v2/location'
            );
            const data = await response.json();
            // console.log(data.results)
            setLocations(data.results)
        } catch (e) {
            console.error(e);
        }
    })();
}, []);
// console.log(setLocation)
// console.log(location)



// location.areas[rand].url ->
// let area = fetch("selectedLocation")
// area.pokemon_encounters[rand].pokemon.url

  return (
    <div className="App">
     < OnLocations locations={locations} />
    </div>
  );
}

export default App;
