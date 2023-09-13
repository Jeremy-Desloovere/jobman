"use client";
import { use, useEffect, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { playground } from "@/components/playground";
import { isMoveOk, isGoal } from "@/utils/functions";
import { type } from "os";

const Home = () => {
  const [play, setPlay] = useState(false);
  const [win, setWin] = useState(false);
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState({ x: 7, y: 2 });
  const [level, setLevel] = useState(1);
  const [memPosition, setMemPosition] = useState({ x: 0, y: 0 });
  const [map, setMap] = useState(playground);

  interface ColorMap {
    [key: string]: string;
  }
  const colors: ColorMap = {
    x: "bg-blue-300",
    "*": "bg-wall",
    "-": "bg-job bg-blue-300",
    o: "bg-me bg-yellow-300",
  };
  type Position = {
    x: number;
    y: number;
  };

  useEffect(() => {
    const initPlayer = () => {
      const newPlayground = [...playground];
      newPlayground.forEach((row, rowIndex) => {
        newPlayground[rowIndex] = row
          .split("")
          .map((symbol, colIndex) =>
            rowIndex === position.x && colIndex === position.y ? "o" : symbol
          )
          .join("");
      });
      return [...newPlayground];
    };

    setMap(initPlayer());
  }, [position.x, position.y]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      event.preventDefault();
      setMessage("");

      const newPosition = getNewPosition(position, event.key);
      if (isMoveOk(newPosition)) {
        console.log("nouvelle position: " + newPosition.x, newPosition.y);

        setMemPosition(position);
        setPosition(newPosition);
        setMap(movePlayer());

        if (isGoal(position)) {
          setWin(true);
          setPlay(false);
        }
      }
      // console.log("vous ne pouvez pas aller dans cette direction");
      else setMessage("Vous ne pouvez pas aller dans cette direction");
    };

    const movePlayer = () => {
      console.log("-----------nouveau movePlayer-----------");
      const newPlayground = [...playground];
      newPlayground.forEach((row, rowIndex) => {
        newPlayground[rowIndex] = row
          .split("")
          .map((symbol, colIndex) =>
            rowIndex === memPosition.x && colIndex === memPosition.y
              ? "x"
              : symbol
          )
          .join("");
      });

      newPlayground.forEach((row, rowIndex) => {
        newPlayground[rowIndex] = row
          .split("")
          .map((symbol, colIndex) =>
            rowIndex === position.x && colIndex === position.y ? "o" : symbol
          )
          .join("");
      });

      return [...newPlayground];
    };

    const getNewPosition = (position: Position, direction: string) => {
      switch (direction) {
        case "ArrowRight":
          return { x: position.x, y: position.y + 1 };
        case "ArrowLeft":
          return { x: position.x, y: position.y - 1 };
        case "ArrowUp":
          return { x: position.x - 1, y: position.y };
        case "ArrowDown":
          return { x: position.x + 1, y: position.y };
        default:
          return position;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [memPosition.x, memPosition.y, position]);

  return (
    <div
      className="w-2/3 min-h-[60vh] flex justify-center items-center bg-black"
      tabIndex={0}
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
          <p className="text-3xl underline text-center mb-3">Level 1 :</p>
          <div className="flex flex-wrap w-[39rem]">
            {map.map((row, rowIndex) =>
              row
                .split("")
                .map((symbol, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`w-12 h-12 bg-cover ${colors[symbol]}`}
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
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl underline text-center mb-3">
              Bravo, vous avez gagné !
            </p>
            <button
              className="btn btn-wide btn-lg btn-primary"
              onClick={() => setPlay(false)}
            >
              Level suivant? <CiPlay1 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
