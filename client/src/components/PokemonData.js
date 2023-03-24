import React, { useEffect, useState } from "react";
import { NoPokemonFound } from "./NoPokemonFound";
import { PokemonFound } from "./PokemonFound";

// starting pokemons
const usersPokemon = [
  "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  "https://pokeapi.co/api/v2/pokemon/charizard",
  "https://pokeapi.co/api/v2/pokemon/poliwhirl",
];

export const PokemonData = ({ locationUrl, setEncounterEnded }) => {
  const [pokemon, setPokemon] = useState(null);
  const [ourPokemons, setOurPokemons] = useState(null);
  const [opponentUrl, setOpponentUrl] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // set user's pokemons
        const usersPokemons = await Promise.all(
          usersPokemon.map(async (pokeApi) => {
            const pokeApiResponse = await fetch(pokeApi);
            const pokeApiData = await pokeApiResponse.json();
            return pokeApiData;
          })
        );
        setOurPokemons(usersPokemons);

        // set the adversary pokemon
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
          setOpponentUrl(pokemonUrl);
          const pokemonResponse = await fetch(pokemonUrl);
          const pokemonData = await pokemonResponse.json();
          setPokemon(pokemonData);
        } else {
          setPokemon("none");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchPokemons();
  }, []);

  const handleEncounterEnd = () => {
    setEncounterEnded(true);
  };

  return (
    <div>
      {pokemon === null || pokemon === "none" ? (
        <NoPokemonFound onTryAnotherLocation={handleEncounterEnd} />
      ) : (
        <PokemonFound
          pokemon={pokemon}
          usersPokemon={usersPokemon}
          opponentUrl={opponentUrl}
          ourPokemons={ourPokemons}
          onEncounterEnd={handleEncounterEnd}
        />
      )}
    </div>
  );
};
