import React, { Dispatch, SetStateAction } from "react";
import { X } from "lucide-react";

type Props = {
  setInputValue: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  inputValue: string;
};

export default function SearchInput({ setInputValue, setOpen }: Props) {
  const handleValueChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);
    setOpen(!!value);
  };

  return (
    <div className="flex w-full items-center gap-2 rounded-full border p-1 px-3 text-sm">
      <input
        placeholder="Type or search. . ."
        onChange={handleValueChange}
        className="flex-1 outline-none"
      />
      <X className="w-4 cursor-pointer opacity-50 hover:opacity-60" />
    </div>
  );
}
