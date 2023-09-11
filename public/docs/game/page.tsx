"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import me from "../../../public/assets/me.png";

export default function GamePage() {
  const [position, setPosition] = useState({ x: 7, y: 2 });
  const [positionJob, setPositionJob] = useState({ x: 11, y: 7 });
  const [direction, setDirection] = useState("right");

  var model = [
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

  //remplissage de la grille
  useEffect(() => {}, []);

  return (
    <div className="container mx-auto">
      <div
        className="grid grid-cols-11 gap-0"
        onKeyDown={(event) => {
          event.preventDefault();

          if (event.key === "ArrowRight") {
            setDirection("right");
            setPosition((position) => ({ ...position, x: position.x + 1 }));
            console.log(position);
          } else if (event.key === "ArrowLeft") {
            setDirection("left");
            setPosition((position) => ({ ...position, x: position.x - 1 }));
            console.log(position);
          } else if (event.key === "ArrowUp") {
            setDirection("up");
            setPosition((position) => ({ ...position, y: position.y - 1 }));
            console.log(position);
          } else if (event.key === "ArrowDown") {
            setDirection("down");
            setPosition((position) => ({ ...position, y: position.y + 1 }));
            console.log(position);
          }
        }}
        tabIndex={0}
      >
        {Array.from({ length: 99 }, (_, index) => (
          <div
            key={index}
            className={`w-16 h-16 flex items-center justify-center ${
              index % 2 === 0 ? "bg-white" : "bg-blue-500"
            }`}
          >
            {index === position.x + position.y * 10 && (
              <Image src={me} alt={"picture of me"} />
            )}
            {index === positionJob.x + positionJob.y * 10 && (
              <Image src={me} alt={"picture of job"} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
