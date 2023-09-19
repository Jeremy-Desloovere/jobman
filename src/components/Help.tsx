import Link from "next/link";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";

const URL_DE_VOTRE_ARTICLE = " https://www.linkedin.com/in/jeremy-desloovere/";
const TITRE_DE_VOTRE_ARTICLE = "JobMan";
const DESCRIPTION_DE_VOTRE_ARTICLE = "Aide Jérémy à trouver un job !";
const VOTRE_SITE_WEB = "https://jobman.vercel.app/";

export default function Help() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 ">
      <h2 className="text-4xl font-bold text-center mb-3">
        Vous souhaitez lui donner un petit coup de pouce ?
      </h2>
      <ul className="text-2xl text-center">
        <li className="flex items-center gap-2">
          Partager ce petit jeu sur LinkedIn {"=>"}
          <Link
            href="https://www.linkedin.com/in/jeremy-desloovere/"
            // https://www.linkedin.com/shareArticle?mini=true&url=URL_DE_VOTRE_ARTICLE&title=TITRE_DE_VOTRE_ARTICLE&summary=DESCRIPTION_DE_VOTRE_ARTICLE&source=VOTRE_SITE_WEB" target="_blank
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={48} color="#0a66c2" />
          </Link>
        </li>

        <li className="flex items-center gap-2">
          Lui proposer un job tout simplement {"=>"}
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
