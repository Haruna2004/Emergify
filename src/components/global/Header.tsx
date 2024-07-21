import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-blu-600 sticky top-0 z-10 flex justify-between border-2 bg-white p-5 px-10 text-[#03aed2] shadow-sm">
      <Link href="/" className="text-xl font-bold">
        LifeSaverAI
      </Link>

      <MenuIcon className="cursor-pointer" />
    </div>
  );
}
