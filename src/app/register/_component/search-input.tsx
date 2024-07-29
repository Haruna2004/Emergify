import React from "react";
import { SearchIcon } from "lucide-react";

type Props = {
  handleValueChange: (e: any) => void;
};

export default function SearchInput({ handleValueChange }: Props) {
  return (
    <div className="flex w-full items-center gap-2 rounded-full border p-1 px-3 text-sm">
      <input
        placeholder="Type or search. . ."
        onChange={handleValueChange}
        className="flex-1 outline-none"
      />
      <SearchIcon className="w-4 opacity-30" />
    </div>
  );
}
