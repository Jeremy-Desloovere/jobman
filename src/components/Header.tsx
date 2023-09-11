import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Job Game
      </Link>
    </div>
  );
}
