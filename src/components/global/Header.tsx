"use client";
import { sidebar_links } from "@/contants/indext";
import useToggleStore from "@/lib/store/useToggle";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  const { sidebar, toggleSidebar } = useToggleStore();

  return (
    <div className="bg-blu-600 sticky top-0 z-10 flex justify-between border-2 bg-white p-5 px-10 text-[#03aed2] shadow-sm">
      <Link href="/" className="text-xl font-bold">
        {/* Save<span className="text-amber-600">a</span>Life */}
        Emergify
      </Link>

      <MenuIcon className="cursor-pointer" onClick={toggleSidebar} />
      {/* <div className="hidden gap-5 sm:flex">
        {sidebar_links.map(({ title, link }) => (
          <Link
            href={link}
            key={link}
            className="cursor-pointer font-medium text-cyan-700"
          >
            {title}
          </Link>
        ))}
      </div> */}
    </div>
  );
}
