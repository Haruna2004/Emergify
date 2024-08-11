"use client";

import { useState } from "react";
import cn from "classnames";

type Props = {
  content: string;
  className?: string;
};

export default function ReadMore({ content, className }: Props) {
  const [isReadMore, setIsReadMore] = useState(true);
  const textLength = content.length;
  return (
    <p className={cn("", className)}>
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
