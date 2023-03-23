import React, { useState } from "react";
import { Battle } from "./Battle";

let index = null;

export const PokemonFound = ({
  pokemon,
  usersPokemon,
  opponentUrl,
  ourPokemons,
  onEncounterEnd,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleEncounterEnd = () => {
    onEncounterEnd(true);
  };

  const choosePokemon = (id) => {
    index = id;
    setIsClicked(true);
  };

  return (
    <div>
      {isClicked ? (
        <Battle
          myPokemon={ourPokemons[index]}
          opponent={pokemon}
          encounterEnd={handleEncounterEnd}
          usersPokemon={usersPokemon}
          opponentUrl={opponentUrl}
        />
      ) : (
        <div>
          <div id="ourPokemons">
            <div className="container text-center">
              <h2>Choose your pokemon:</h2>
              <div className="row justify-content-md-center mb-5 pb-5">
                {ourPokemons.map((ourPoke, i) => (
                  <div key={i} className="col-md-auto">
                    <h4>
                      {ourPoke.name.charAt(0).toUpperCase() +
                        ourPoke.name.slice(1)}
                    </h4>
                    <button className="btn" onClick={() => choosePokemon(i)}>
                      <img
                        src={ourPoke.sprites.front_default}
                        // src={ourPoke.sprites.other.home.front_shiny}
                        alt={ourPoke.name}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <h2>Your opponent is:</h2>
              <div className="row justify-content-md-center">
                <div id="opponent" className="col-md-auto">
                  <h4>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </h4>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  {/* <img src={pokemon.sprites.other.home.front_shiny} alt={pokemon.name} /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <button
              className="btn btn-info w-auto"
              onClick={handleEncounterEnd}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-skip-backward-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M11.729 5.055a.5.5 0 0 0-.52.038L8.5 7.028V5.5a.5.5 0 0 0-.79-.407L5 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407V8.972l2.71 1.935A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.271-.445z" />
              </svg>
              &nbsp; Locations
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
