import React, { createContext } from "react";

const DialogContext = createContext<any>({} as any);

type Props = {
  children: React.ReactNode;
};

export default function DialogProvider({}: Props) {
  return <div></div>;
}
