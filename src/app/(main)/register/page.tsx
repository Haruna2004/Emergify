import {
  Ambulance,
  Book,
  CarFront,
  HandCoins,
  HospitalIcon,
  PlusCircle,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const selections = [
  { title: "Medical Professional", link: "practitioner" },
  { title: "Medical Hospital", link: "hospital" },
];

export default function RegisterHome({}: Props) {
  return (
    <div className="relative h-full">
      <div className="grid w-full grid-cols-1 gap-5 p-10 pt-16 sm:grid-cols-2">
        {selections.map(({ title, link }) => (
          <Link
            className="flex flex-col items-center justify-center space-y-3 rounded-lg border border-[#2985bc] p-5 text-center text-[#2985bc] transition-all duration-150 hover:border-b-2"
            key={link}
            href={`/register/${link}`}
          >
            <div className="per">
              {link === "practitioner" && <Stethoscope className="text-2xl" />}
              {link === "hospital" && <HospitalIcon />}
              {link === "nearby" && <Ambulance />}
              {link === "donate" && <HandCoins />}
            </div>

            <p className="text-base font-medium">{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
