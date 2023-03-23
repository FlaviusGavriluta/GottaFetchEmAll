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
                    <h4>{ourPoke.name}!</h4>
                    <button onClick={() => choosePokemon(i)}>
                      <img
                        src={ourPoke.sprites.front_default}
                        alt={ourPoke.name}
                      />
                    </button>
                  </div>
                ))}
              </div>
              <h2>Your opponent is:</h2>
              <div className="row justify-content-md-center">
                <div id="opponent" className="col-md-auto">
                  <h4>{pokemon.name}</h4>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <button
              className="btn btn-success w-auto"
              onClick={handleEncounterEnd}
            >
              End encounter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
