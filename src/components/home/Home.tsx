import {
  HospitalIcon,
  PlusCircle,
  Stethoscope,
  WalletMinimal,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const selections = [
  { title: "First Aid", link: "first-aid" },
  { title: "Locate Best Hospital", link: "hospital" },
  { title: "Medical Responder", link: "driver" },
  { title: "Donate", link: "donation" },
];

export default function Home({}: Props) {
  return (
    <div className="relative h-full">
      <div className="grid w-full grid-cols-1 gap-5 p-10 pt-16 sm:grid-cols-2">
        {selections.map(({ title, link }) => (
          <Link
            className="flex flex-col items-center justify-center space-y-3 rounded-lg border border-[#2985bc] p-5 text-center text-[#2985bc] transition-all duration-150 hover:border-b-2"
            key={link}
            href={link}
          >
            <div className="text-2xl">
              {link === "first-aid" && <PlusCircle className="text-2xl" />}
              {link === "hospital" && <HospitalIcon />}
              {link === "driver" && <Stethoscope />}
              {link === "donation" && <WalletMinimal />}
            </div>

            <p className="text-base font-medium">{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
