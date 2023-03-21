import React, { useEffect, useState } from "react";

export const PokemonData = ({ locationUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationResponse = await fetch(locationUrl);
        const locationData = await locationResponse.json();
        const areas = locationData.areas;
        const randomIndexOfAreas = Math.floor(Math.random() * areas.length);
        const areaUrl = areas[randomIndexOfAreas].url;
        const areaResponse = await fetch(areaUrl);
        const areaData = await areaResponse.json();
        const pokemonEncounters = areaData.pokemon_encounters;
        if (pokemonEncounters.length > 0) {
          const randomIndexOfPokemons = Math.floor(
            Math.random() * pokemonEncounters.length
          );
          const pokemonUrl =
            pokemonEncounters[randomIndexOfPokemons].pokemon.url;
          const pokemonResponse = await fetch(pokemonUrl);
          const pokemonData = await pokemonResponse.json();
          setPokemon(pokemonData);
        } else {
          setPokemon(null);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [locationUrl]);
};
