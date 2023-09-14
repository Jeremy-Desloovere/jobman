"use client";
import { use, useEffect, useMemo, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { playground } from "@/components/playground";
import { isMoveOk, isGoal, getPlayerPosition } from "@/utils/functions";
import { type } from "os";
import { init } from "next/dist/compiled/@vercel/og/satori";

const Home = () => {
  const [play, setPlay] = useState(false);
  const [win, setWin] = useState(false);
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState(1);
  const [position, setPosition] = useState(getPlayerPosition(level));
  const [currentMap, setCurrentMap] = useState(playground[level - 1].map);
  const [endOfGame, setEndOfGame] = useState(false);

  const [memPosition, setMemPosition] = useState(getPlayerPosition(level));

  interface ColorMap {
    [key: string]: string;
  }
  const colors: ColorMap = {
    x: "bg-blue-300",
    "*": "bg-wall",
    "-": "bg-job bg-blue-300",
    o: "bg-me",
    m: "bg-red-300",
  };
  type Position = {
    x: number;
    y: number;
  };

  const initPlayer = (): void => {
    console.log("initPlayer");
    const newMap = [...currentMap];

    newMap.map((row, rowIndex) => {
      newMap[rowIndex] = row
        .split("")
        .map((symbol, colIndex) =>
          rowIndex === position.x && colIndex === position.y ? "o" : symbol
        )
        .join("");
    });

    setCurrentMap([...newMap]);
  };

  const movePlayer = () => {
    console.log("-----------nouveau movePlayer-----------");
    console.log("memPosition: " + memPosition.x, memPosition.y);
    console.log("position: " + position.x, position.y);
    const newMap = [...currentMap];
    newMap.forEach((row, rowIndex) => {
      newMap[rowIndex] = row
        .split("")
        .map((symbol, colIndex) => {
          if (rowIndex === memPosition.x && colIndex === memPosition.y) {
            return "x";
          } else if (rowIndex === position.x && colIndex === position.y) {
            return "o";
          } else {
            return symbol;
          }
        })
        .join("");
    });
    return [...newMap];
  };

  useEffect(() => {
    if (level === playground.length) {
      setEndOfGame(true);
    }
    initPlayer();
  }, [level]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      event.preventDefault();

      setMessage("");
      const newPosition = isMoveOk(level, position, event.key);
      console.log("newPosition: " + newPosition);

      if (newPosition) {
        setMemPosition(position);
        setPosition(newPosition);
        console.log("isMoveOK to " + position.x, position.y);
        setCurrentMap(movePlayer());

        if (isGoal(level, newPosition)) {
          setWin(true);
        }
      } else setMessage("Vous ne pouvez pas aller dans cette direction");
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentMap, level, memPosition.x, memPosition.y, position]);

  return (
    <div
      className="w-2/3 min-h-[60vh] flex justify-center items-center bg-black"
      // tabIndex={0}
    >
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
            Level {level} : {playground[level - 1].name}
          </p>
          <div className="flex flex-wrap w-[39rem]">
            {currentMap.map((row, rowIndex) =>
              row
                .split("")
                .map((symbol, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`w-12 h-12 bg-cover bg-blue-300 ${colors[symbol]}`}
                  />
                ))
            )}
          </div>
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
              onClick={() => {
                setLevel(level + 1);
                setWin(false);
                setCurrentMap(playground[level].map);
              }}
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
              onClick={() => {
                setLevel(0);
                setWin(false);
                setCurrentMap(playground[level].map);
              }}
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
