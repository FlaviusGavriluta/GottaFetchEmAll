import React, { useState } from "react";


export const Battle = ({
  myPokemon,
  opponent,
  encounterEnd,
  usersPokemon,
  opponentUrl,
}) => {
  const [battleEnded, setBattleEnded] = useState(false);
  const [win, setWin] = useState(false);
  const [displayOurHP, setDisplayOurHP] = useState(null);
  const [displayOpponentHP, setDisplayOpponentHP] = useState(null);
  

  const handleEncounterEnd = () => {
    encounterEnd(true);
  };

  const handleHp = async () => {
    let playerTurn = true;
    let opponentHp = opponent.stats[0].base_stat;
    let ourHp = myPokemon.stats[0].base_stat;

    while (ourHp > 0 && opponentHp > 0) {
      if (playerTurn) {
        opponentHp -=
          ((((2 / 5 + 2) * myPokemon.stats[1].base_stat * 60) /
            opponent.stats[2].base_stat /
            50 +
            2) *
            Math.floor(Math.random(217) * 255)) /
          255;
        await new Promise((resolve) => setTimeout(resolve, 100));
        setDisplayOpponentHP(opponentHp);
      } else {
        ourHp -=
          ((((2 / 5 + 2) * opponent.stats[1].base_stat * 60) /
            myPokemon.stats[2].base_stat /
            50 +
            2) *
            Math.floor(Math.random(217) * 255)) /
          255;
        await new Promise((resolve) => setTimeout(resolve, 100));
        setDisplayOurHP(ourHp);
      }
      playerTurn = !playerTurn;
      console.log(`OpponentHP: ${opponentHp}`);
      console.log(`OurHP: ${ourHp}`);
      console.log(win);
    }

    if (opponentHp <= 0) {
      setWin(true);
      setBattleEnded(true);
      usersPokemon.push(opponentUrl);
    }
    if (ourHp <= 0) {
      setWin(false);
      setBattleEnded(true);
    }
  };

  return (
    <div>
      {battleEnded ? (
        <div>
          {win ? (
            <div>
              <div>You won!</div> <h2>You have captured:</h2>
              <h4>{opponent.name}</h4>
              <div>
                <img src={opponent.sprites.front_default} alt={opponent.name} />
              </div>
            </div>
          ) : (
            <div>You lost the battle!</div>
          )}
        </div>
      ) : (
        <div>
          <div>
            <h2>Your Pokemon:</h2>
            <h4>{myPokemon.name}</h4>
            <div>{displayOurHP}</div>
            <div>
              <img src={myPokemon.sprites.front_default} alt={myPokemon.name} />
            </div>
            <button onClick={handleHp}>Start Battle</button>
          </div>
          <div id="opponent">
            <h2>Your opponent is:</h2>
            <h4>{opponent.name}</h4>
            <div>{displayOpponentHP}</div>
            <div>
              <img src={opponent.sprites.front_default} alt={opponent.name} />
            </div>
          </div>
        </div>
      )}
      <div>
        <button onClick={handleEncounterEnd}>End encounter</button>
      </div>
    </div>
  );
};
