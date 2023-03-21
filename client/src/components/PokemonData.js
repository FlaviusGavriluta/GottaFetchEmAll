import React, { useEffect, useState } from "react";
import { NoPokemonFound } from "./NoPokemonFound";
import { PokemonFound } from "./PokemonFound";


export const PokemonData = ({ locationUrl, setEncounterEnded }) => {
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
          setEncounterEnded(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [locationUrl, setEncounterEnded]);

  return pokemon ? (
    <PokemonFound pokemon={pokemon} onEncounterEnd={setEncounterEnded} />
  ) : (
    <NoPokemonFound onTryAnotherLocation={setEncounterEnded} />
  );
};
