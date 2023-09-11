"use client";
import React, { useEffect, useState } from "react";

const model = [
  "xxxxxxxxx**xx",
  "x********xx-x",
  "xxxxxxxx*x**x",
  "xx*****xxx*x*",
  "xxxxxx*x***x*",
  "****xx*x*xxx*",
  "xxx*xx*x*xxxx",
  "x*o*xx**xx*xx",
  "x***xxxxxx*xx",
  "xxxxxx*****xx",
];

function Square({ isWall, isGoal, isPawn }) {
  const classNames = ["square"];
  if (isWall) classNames.push("wall");
  if (isGoal) classNames.push("goal");
  if (isPawn) classNames.push("Pawn");

  return <div className={classNames.join(" ")}></div>;
}

export default function GamePage() {
  const [positionPawnX, setPositionPawnX] = useState(7);
  const [positionPawnY, setPositionPawnY] = useState(2);
  const [placePawn, setPlacePawn] = useState(0);
  const [win, setWin] = useState(false);

  useEffect(() => {
    const handleMove = (event) => {
      event.preventDefault();

      switch (event.code) {
        case "ArrowUp":
          movePawn(-1, 0);
          break;
        case "ArrowDown":
          movePawn(1, 0);
          break;
        case "ArrowRight":
          movePawn(0, 1);
          break;
        case "ArrowLeft":
          movePawn(0, -1);
          break;
        default:
          // alert("erreur de touche");
          break;
      }
    };

    const movePawn = (deltaX, deltaY) => {
      const newX = positionPawnX + deltaX;
      const newY = positionPawnY + deltaY;

      if (
        newX < 0 ||
        newX >= model.length ||
        newY < 0 ||
        newY >= model[0].length
      ) {
        alert("Sortie de jeu, mouvement impossible");
        return;
      }

      if (model[newX][newY] === "*") {
        alert("Attention, un mur !");
        return;
      }

      const newPlacePawn = newX * model[0].length + newY + 1;

      if (model[newX][newY] === "-") {
        alert("Bien joué !");
        setWin(true);
      } else {
        setWin(false);
      }

      setPositionPawnX(newX);
      setPositionPawnY(newY);
      setPlacePawn(newPlacePawn);
    };

    window.addEventListener("keydown", handleMove);

    return () => {
      window.removeEventListener("keydown", handleMove);
    };
  }, [positionPawnX, positionPawnY]);

  return (
    <div className="terrain_de_jeu">
      {model.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.split("").map((cell, cellIndex) => (
            <Square
              key={cellIndex}
              isWall={cell === "*"}
              isGoal={cell === "-"}
              isPawn={placePawn === rowIndex * model[0].length + cellIndex + 1}
            />
          ))}
        </div>
      ))}
      {win && <div className="win-message">Bien joué !</div>}
    </div>
  );
}
