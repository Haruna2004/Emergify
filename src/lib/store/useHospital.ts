import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { HospitalType } from "../types";

type HospitalState = {
  situationText: string;
  updateSituation: (value: string) => void;
  mapLocation: number[];
  updateMapLocation: (long_lat: number[]) => void;
};

const useHospitalStore = create(
  devtools<HospitalState>((set, get) => ({
    // start-here
    situationText: "",
    // [long,lat]
    mapLocation: [],
    updateSituation: (value: string) => {
      set({
        situationText: value,
      });
    },
    updateMapLocation: (long_lat) => {
      set({
        mapLocation: [...long_lat],
      });
    },

    // end-here
  })),
);

export default useHospitalStore;

export type HospitalListType = {
  locatedHospitals: HospitalType[] | null;
  selectedHospital: HospitalType | null;
  updateHospitalsList: (hospitals: HospitalType[]) => void;
  selectHospital: (hospital: HospitalType) => void;
};

export const useHospitalList = create<HospitalListType>((set, get) => ({
  locatedHospitals: null,
  selectedHospital: null,
  updateHospitalsList: (hospitals) => {
    console.log("hospitals", hospitals);
    set({
      locatedHospitals: hospitals,
      selectedHospital: null,
    });
  },
  selectHospital: (hospital) => {
    console.log("hospital", hospital);
    set({
      selectedHospital: hospital,
    });
  },
}));
