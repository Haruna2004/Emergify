"use client";

import { useState } from "react";
import cn from "classnames";

type Props = {
  content: string;
};

export default function ReadMore({ content }: Props) {
  const [isReadMore, setIsReadMore] = useState(true);
  const textLength = content.length;
  return (
    <p className="">
      {isReadMore ? content.slice(0, 100) : content}
      <span
        className={cn(
          "cursor-pointer font-medium text-green-800",
          textLength < 100 && "hidden",
        )}
        onClick={() => setIsReadMore((prev) => !prev)}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
}
