"use client";
import HospitalCard from "@/components/hospital/hospital-card";
import React from "react";
import { hostpital_list } from "../_test/demo-data";

type Props = {};

function page({}: Props) {
  return (
    <div className="p-5">
      {/* tab */}

      {/* list */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {hostpital_list.map((hospitalInfo) => (
          <HospitalCard key={hospitalInfo.id} hospitalInfo={hospitalInfo} />
        ))}
      </div>
    </div>
  );
}

export default page;
