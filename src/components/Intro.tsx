"use client";

import React, { useState } from "react";
import { Message } from "./Message";

export default function Intro() {
  const [click, setClick] = useState(false);
  const [message, setMessage] = useState("");

  const handleArrowsClick = () => {
    setClick(!click);
    setMessage("Oups, ceci n'est pas un clavier :)");
  };

  return (
    <>
      {click && <Message message={message} />}

      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-6xl font-bold text-center mb-2">
          Aide Jérémy à trouver du travail !
        </h1>
        <p className="text-2xl text-center">
          Utilise les flèches du clavier pour te déplacer dans le labyrinthe et
          décrocher le job.
        </p>
        <div
          className="bg-arrows w-16 h-16 bg-cover cursor-pointer "
          onClick={handleArrowsClick}
        ></div>
      </div>
    </>
  );
}
