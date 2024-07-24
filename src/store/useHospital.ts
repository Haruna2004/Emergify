import { create } from "zustand";
import { devtools } from "zustand/middleware";

type HospitalState = {
  hospitalName: string;
  score: number;
  update: (name: string) => void;
};

const useHospitalStore = create(
  devtools<HospitalState>((set, get) => ({
    // start-here
    hospitalName: "",
    score: 0,
    update: (name: string) => {
      set((state) => ({
        hospitalName: name,
      }));
    },

    // end-here
  })),
);

export default useHospitalStore;
//Reference: https://medium.com/globant/react-state-management-b0c81e0cbbf3
