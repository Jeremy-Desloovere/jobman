import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <div className="flex justify-between navbar  bg-base-200  border-b-gray-300 border-b">
      <Link href="/" className="btn btn-ghost normal-case text-xl">
        Job Game
      </Link>
      <ThemeSwitcher />
    </div>
  );
}
