"use client";
import { useEffect, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { playground } from "@/components/playground";
import { isMoveOk, isGoal } from "@/utils/functions";
import { Map } from "@/components/Map";

const Home = () => {
  const [play, setPlay] = useState(false);
  const [win, setWin] = useState(false);
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState(0);
  const [position, setPosition] = useState(playground[0].start);
  const [endOfGame, setEndOfGame] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      event.preventDefault();

      // algo :
      // je vide le message
      // je récupere la position du joueur
      // je bouge le joueur de place dans la map
      // je vérifie si la nouvelle position n'est pas un mur
      // si oui je change la position et je bouge le joueur
      // je vérifie si la nouvelle position est la sortie
      // si oui je passe au niveau suivant
      // si non j'affiche un message
      // si non je ne fais rien
      const eventString: string = event.key;

      setMessage("");
      const newPosition = isMoveOk(level, position, eventString);

      if (newPosition) {
        setPosition(newPosition);

        if (isGoal(level, newPosition)) {
          if (level === playground.length - 1) {
            setEndOfGame(true);
          } else {
            setWin(true);
          }
          // window.removeEventListener("keydown", handleKeyDown);
        }
      } else setMessage("Vous ne pouvez pas aller dans cette direction");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [level, position]);

  const initGame = () => {
    // setPlay(false);
    console.log("init game");
    setWin(false);
    setMessage("");
    setLevel(0);
    setPosition(playground[0].start);
    setEndOfGame(false);
  };

  const nextLevel = () => {
    console.log("next level");
    setLevel(level + 1);
    setWin(false);
    setMessage("");
    setPosition(playground[level + 1].start);
  };

  return (
    <div className="w-2/3 min-h-[60vh] flex justify-center items-center bg-black">
      {message && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>{message}</span>
          </div>
        </div>
      )}
      {play ? (
        <div className="flex flex-col relative">
          <p className="text-3xl  text-center mb-3">
            Level {level + 1} : {playground[level].name}
          </p>
          <Map level={level} playerPosition={position} />
        </div>
      ) : (
        <button
          className="btn btn-wide btn-lg btn-primary"
          onClick={() => setPlay(true)}
        >
          Jouer <CiPlay1 />
        </button>
      )}
      {win && (
        <div className="absolute top-30 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl  text-center mb-3">
              Bravo, vous avez gagné !
            </p>
            <button
              className="btn btn-wide btn-lg btn-primary"
              onClick={nextLevel}
            >
              Level suivant? <CiPlay1 />
            </button>
          </div>
        </div>
      )}
      {endOfGame && (
        <div className="absolute top-30 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl  text-center mb-3">Fin du jeu</p>

            <button
              className="btn btn-wide btn-lg btn-primary"
              onClick={initGame}
            >
              Rejouer <CiPlay1 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
