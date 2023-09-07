"use client";

import { AwesomeButton } from "react-awesome-button";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/game">
      <div className="bg-primary-focus rounded-sm px-12">
        <AwesomeButton size="large" type="primary" className="h-16">
          <p className="text-2xl">Jouer</p>
        </AwesomeButton>
      </div>
    </Link>
  );
}
