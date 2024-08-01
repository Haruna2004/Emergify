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

      {/* list */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {locatedHospitals.map((hospitalInfo) => (
          <HospitalCard key={hospitalInfo.id} hospitalInfo={hospitalInfo} />
        ))}
      </div>
    </div>
  );
}

export default ListAllHospitals;
