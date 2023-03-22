import React, { useState } from "react";
import { Battle } from "./Battle";

let index = null;

export const PokemonFound = ({ pokemon, usersPokemon, opponentUrl, ourPokemons, onEncounterEnd }) => {
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
          ourPokemons={ourPokemons}
          usersPokemon={usersPokemon}
          opponentUrl={opponentUrl}
        />
      ) : (
        <div>
          <div id="ourPokemons">
            <h2>Choose your pokemon:</h2>

            {ourPokemons.map((ourPoke, i) => (
              <div key={i}>
                <h4>{ourPoke.name}!</h4>
                <button onClick={() => choosePokemon(i)}>
                  <img src={ourPoke.sprites.front_default} alt={ourPoke.name} />
                </button>
              </div>
            ))}
          </div>
          <div id="opponent">
            <h2>Your opponent is:</h2>
            <h4>{pokemon.name}</h4>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <button onClick={handleEncounterEnd}>End encounter</button>
          </div>
        </div>
      )}
    </div>
  );
};

// i=0 sau i = 2

// while ( hp > 0 && hp2 > 0)  {
//     if ( i%2 == 0 ) {
//         hp2 = hp2 - atk1
//      console.log(hp2)
//         i++;
//     } else {
//       hp = hp - atk2
//    console.log(hp)
//       i++
//     }

// }
