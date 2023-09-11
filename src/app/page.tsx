"use client";

import Image from "next/image";
import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import me from "../../public/assets/me.png";
import mur from "../../public/assets/mur.png";
import job from "../../public/assets/job.png";

import { playground } from "@/components/playground";

const Home = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="w-2/3 min-h-[60vh] flex justify-center items-center  bg-black">
      {play ? (
        <div className="flex flex-col">
          <p className="text-3xl underline text-center mb-3">
            Level 1 : Le Labyrinthe
          </p>
          <div className="flex flex-wrap w-[39rem]">
            {playground.map((row, colIndex) =>
              row.split("").map((cell, rowIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-12 h-12 ${
                    cell === "x"
                      ? "bg-blue-500"
                      : cell === "-"
                      ? "bg-blue-500"
                      : cell === "o"
                      ? "bg-yellow-500"
                      : cell === "m"
                      ? "bg-red-200"
                      : ""
                  }`}
                >
                  {cell === "o" && <Image src={me} alt="me" />}
                  {cell === "*" && <Image src={mur} alt="mur" />}
                  {cell === "-" && <Image src={job} alt="job" />}
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <button
          className="btn btn-wide btn-lg btn-primary "
          onClick={() => setPlay(true)}
        >
          Jouer
          <CiPlay1 />
        </button>
      )}
    </div>
  );
};

export default Home;
