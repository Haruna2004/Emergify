import { HospTreat } from "@/contants/hospital-fts";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PatientType } from "@/lib/types";
import { getAiResponse } from "./server/aiResponse";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// TODO: move function to client libs
export function getFilteredList(List: HospTreat[], inpValue: string) {
  const filteredComs = List.map(({ category, treatments }) => {
    const filteredValues = treatments.filter(({ title }) =>
      title.toLowerCase().includes(inpValue.toLowerCase()),
    );
    return { category: category, treatments: filteredValues };
  });

  return filteredComs;
}


export function isPatientType(obj: any): obj is PatientType {
  return (
    typeof obj === "object" &&
    obj !== null &&
    Array.isArray(obj.specialities) &&
    obj.specialities.every((item: string) => typeof item === "string") &&
    Array.isArray(obj.treatments) &&
    obj.treatments.every((item: string) => typeof item === "string")
  );
}


