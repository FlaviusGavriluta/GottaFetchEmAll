import React, { useEffect, useState } from "react";
import { NoPokemonFound } from "./NoPokemonFound";
import { PokemonFound } from "./PokemonFound";

export const PokemonData = ({ locationUrl, setEncounterEnded }) => {
  const [pokemon, setPokemon] = useState(null);
  const [ourPokemons, setOurPokemons] = useState(null);

  // starting pokemons
  const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        let usersPokemons = [];
        usersPokemon.map(async (pokeApi) => {
          const pokeApiResponse = await fetch(pokeApi);
          const pokeApiData = await pokeApiResponse.json();
          usersPokemons.push(pokeApiData);
        });
        setOurPokemons(usersPokemons)
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
          setPokemon("none");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleEncounterEnd = () => {
    setEncounterEnded(true);
  };

  return (
    <div>
      {pokemon === null || pokemon === "none" ? (
        <NoPokemonFound onTryAnotherLocation={handleEncounterEnd} />
      ) : (
        <PokemonFound pokemon={pokemon} ourPokemons={ourPokemons} onEncounterEnd={handleEncounterEnd} />
      )}
    </div>
  );
};
