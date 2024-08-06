import HospitalHome from "@/components/hospital/hospital-home";
import React from "react";

type Props = {};

//https://www.youtube.com/watch?v=tYqoPwv7QGc - Algolia text search

export default function Hospital({}: Props) {
  return (
    <div className="h-full">
      <HospitalHome />
    </div>
  );
}
