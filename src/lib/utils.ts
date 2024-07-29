import { HospTreat } from "@/contants/hospital-fts";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFilteredList(List: HospTreat[], inpValue: string) {
  const filteredComs = List.map(({ category, treatments }) => {
    const filteredValues = treatments.filter(({ title }) =>
      title.toLowerCase().includes(inpValue.toLowerCase()),
    );
    return { category: category, treatments: filteredValues };
  });

  return filteredComs;
}
