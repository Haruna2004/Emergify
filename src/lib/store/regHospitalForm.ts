import { create } from "zustand";
import { RegHospitalState } from "../types";
import { hospital_treatment, HospTreat } from "@/contants/hospital-fts";

const regHospitalForm = create<RegHospitalState>((set) => ({
  hospitalName: "",
  description: "",
  coverImage: "",
  specialities: [],
  treatments: [],
  contact: {
    phone1: "",
    phone2: "",
    emailAddress: "",
  },
  googleMapLink: "",
  address: {
    street: "",
    city: "",
    state: "",
    country: "",
  },
  changeValue: (name, value) => {
    set((_state) => ({
      [name]: value,
    }));
  },
}));

export default regHospitalForm;

type TreatList = {
  availableTreatment: HospTreat[];
  selectTreat: (categoryIndex: number, treatIndex: number) => void;
  getSelectedTreat: () => void;
};

export const useTreatmentList = create<TreatList>((set, get) => ({
  availableTreatment: hospital_treatment,

  selectTreat: (categoryIndex, treatIndex) => {
    set((state) => {
      const newAvailableTreat = [...state.availableTreatment];
      // Reverese the value
      newAvailableTreat[categoryIndex].treatments[treatIndex].selected =
        !newAvailableTreat[categoryIndex].treatments[treatIndex].selected;
      return {
        availableTreatment: [...newAvailableTreat],
      };
    });
  },

  getSelectedTreat: () => {},

  // endSelectTreat
}));
