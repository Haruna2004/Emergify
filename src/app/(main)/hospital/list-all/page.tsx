"use client";
import HospitalCard from "@/components/hospital/hospital-card";
import React from "react";
// import { hostpital_list } from "../_test/demo-data";
import { useHospitalList } from "@/lib/store/useHospital";

type Props = {};

function ListAllHospitals({}: Props) {
  const { locatedHospitals } = useHospitalList();

  if (!locatedHospitals) return <div>Loading...</div>;

  return (
    <div className="p-5">
      {/* tabs Suitable - Nearest */}
      <h2 className="mb-5 text-center font-mono text-2xl font-bold text-cyan-600 md:text-left">
        Hospitals
      </h2>
      {/* list */}
      <div className="grid grid-cols-1 gap-5 md:mt-7 md:grid-cols-2">
        {locatedHospitals.map((hospitalInfo) => (
          <HospitalCard key={hospitalInfo.id} hospitalInfo={hospitalInfo} />
        ))}
      </div>
    </div>
  );
}

export default ListAllHospitals;
