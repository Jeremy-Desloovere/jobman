import Link from "next/link";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function Help() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 ">
      <h2 className="text-4xl font-bold text-center mb-3">
        Comment peux-tu l'aider ?
      </h2>
      <ul className="text-2xl text-center">
        <li className="flex items-center gap-2">
          En partageant son profil LinkedIn {"=>"}
          <Link
            href="https://www.linkedin.com/in/jeremy-desloovere/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={48} color="#0a66c2" />
          </Link>
        </li>

        <li className="flex items-center gap-2">
          En lui proposant un job tout simplement {"=>"}
          <Link
            href="mailto:jdesloovere@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillEnvelopeFill size={48} color="#0a66c2" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
