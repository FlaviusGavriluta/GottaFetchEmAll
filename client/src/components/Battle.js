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
  const [startBattle, setStartBattle] = useState(false);

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
      setStartBattle(true);
    }

    if (opponentHp <= 0) {
      setWin(true);
      setBattleEnded(true);
      if (!usersPokemon.includes(opponentUrl)) usersPokemon.push(opponentUrl);
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
            <div className="container text-center">
              <div className="row justify-content-md-center">
                <div className="col-md-auto">
                  <h1>You won!</h1>
                  <h2>You have captured:</h2>
                  <h4>{opponent.name}</h4>
                  <div>
                    <img
                      src={opponent.sprites.front_default}
                      alt={opponent.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container text-center">
              <div className="row justify-content-md-center">
                <div className="col-md-auto"><h1>You lost the battle!</h1></div>
              </div>
            </div>
          )}

          <div class="row justify-content-md-center">
            <div class="col-md-auto mt-5 pt-5">
              <button
                className="btn btn-danger w-auto"
                onClick={handleEncounterEnd}
              >
                End encounter
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="container text-center">
            <div className="row justify-content-md-center">
              <div id="ourPoke" className="col-md-auto m-5 p-5">
                <h2>Your Pokemon</h2>
                <h4>{myPokemon.name}</h4>

                {startBattle ? (
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: `${Math.floor(displayOurHP)}%` }}
                    >
                      {Math.floor(displayOurHP)}
                    </div>
                  </div>
                ) : (
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: "100%" }}>
                      {myPokemon.stats[0].base_stat}
                    </div>
                  </div>
                )}

                <div>
                  <img
                    src={myPokemon.sprites.front_default}
                    alt={myPokemon.name}
                  />
                </div>
              </div>
              <div id="opponent" class="col-md-auto m-5 p-5">
                <h2>Your opponent</h2>
                <h4>{opponent.name}</h4>

                {startBattle ? (
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{ width: `${Math.floor(displayOpponentHP)}%` }}
                    >
                      {Math.floor(displayOpponentHP)}
                    </div>
                  </div>
                ) : (
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Example with label"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar" style={{ width: "100%" }}>
                      {opponent.stats[0].base_stat}
                    </div>
                  </div>
                )}

                <div>
                  <img
                    src={opponent.sprites.front_default}
                    alt={opponent.name}
                  />
                </div>
              </div>
            </div>
            <div class="row justify-content-md-center">
              <div class="col-md-auto mt-5 pt-5">
                <button className="btn btn-danger w-auto" onClick={handleHp}>
                  Start Battle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div>
        <button onClick={handleEncounterEnd}>End encounter</button>
      </div> */}
    </div>
  );
};
