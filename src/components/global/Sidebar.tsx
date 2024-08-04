"use client";
import useToggleStore from "@/lib/store/useToggle";
import React from "react";
import cn from "classnames";
import { useRouter } from "next/navigation";
import { sidebar_links } from "@/contants/indext";

type Props = {};

export default function Sidebar({}: Props) {
  const { sidebar, toggleSidebar } = useToggleStore();
  const router = useRouter();

  const handleClick = (link: string) => {
    toggleSidebar();
    router.push(`${link}`);
  };

  return (
    <div
      className={cn(
        "absolute right-5 top-20 z-10 h-fit w-40 rounded-md border bg-white p-5 md:hidden",
        !sidebar && "hidden",
      )}
    >
      <div className="flex h-full w-full flex-col gap-5">
        {sidebar_links.map(({ title, link }) => (
          <div
            key={link}
            onClick={() => handleClick(link)}
            className="cursor-pointer font-medium text-cyan-700"
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}
