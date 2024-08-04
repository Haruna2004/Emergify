"use client";
import { BriefcaseMedical, HospitalIcon, Stethoscope } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import cn from "classnames";

type Props = {};

const nav_buttons = [
  { title: "Hospital", value: "hospital" },
  { title: "First Aid", value: "first-aid" },
  { title: "Medics", value: "medics" },
];

export default function Footer({}: Props) {
  const router = useRouter();
  const [selectedNav, setSelectedNav] = useState<string>("");
  const pathnames = usePathname();

  useEffect(() => {
    let baseValue = pathnames.split("/")[1];
    const currentPath = nav_buttons.filter(
      ({ value }) => baseValue === value,
    )[0];
    if (currentPath) setSelectedNav(currentPath.value);
  }, [pathnames]);

  return (
    <footer className="sticky bottom-0 left-0 z-10 flex h-16 w-full bg-stone-100 md:hidden">
      <div className="flex h-full w-full items-center justify-around px-5 text-cyan-800">
        {nav_buttons.map(({ value, title }) => (
          <div
            className={cn(
              "flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1 text-sm font-medium transition-all duration-150",
              selectedNav === value && "border-t-2 border-cyan-800",
            )}
            key={value}
            onClick={() => {
              setSelectedNav(value);
              router.push(`/${value}`);
            }}
          >
            <div>
              {value === "first-aid" && (
                <BriefcaseMedical className="h-5 w-5" />
              )}
              {value === "hospital" && <HospitalIcon className="h-5 w-5" />}
              {value === "medics" && <Stethoscope className="h-5 w-5" />}
            </div>

            <p>{title}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}
