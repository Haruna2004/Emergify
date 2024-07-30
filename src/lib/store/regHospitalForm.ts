import { create } from "zustand";
import { RegHospitalState } from "../types";
import {
  hospital_specs,
  hospital_treatment,
  HospSpec,
  HospTreat,
} from "@/contants/hospital-fts";

const regHospitalForm = create<RegHospitalState>((set) => ({
  hospitalName: "",
  description: "",
  coverImage: "",
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
  getSelectedTreat: () => string[];
};

export const useTreatmentList = create<TreatList>((set, get) => ({
  availableTreatment: hospital_treatment,

  selectTreat: (categoryIndex, treatIndex) => {
    set((state) => {
      const newAvailableTreat = [...state.availableTreatment];
      // Reserve the boolean value
      newAvailableTreat[categoryIndex].treatments[treatIndex].selected =
        !newAvailableTreat[categoryIndex].treatments[treatIndex].selected;
      return {
        availableTreatment: [...newAvailableTreat],
      };
    });
  },

  getSelectedTreat: () => {
    const finalTreatList: string[] = [];

    get().availableTreatment.forEach(({ treatments }) => {
      treatments.forEach(({ title, selected }) => {
        if (selected) {
          finalTreatList.push(title);
        }
      });
    });

    return finalTreatList;
  },
}));

type SpecsList = {
  availableSpecs: HospSpec[];
  selectSpec: (specIndex: number) => void;
  getSelectedSpec: () => string[];
};

export const useSpecsList = create<SpecsList>((set, get) => ({
  availableSpecs: hospital_specs,
  selectSpec: (specIndex) => {
    set((state) => {
      const newAvailSpecs = [...state.availableSpecs];
      newAvailSpecs[specIndex].selected = !newAvailSpecs[specIndex].selected;

      return {
        availableSpecs: [...newAvailSpecs],
      };
    });
  },
  getSelectedSpec: () => {
    const finalSpecList: string[] = [];

    get().availableSpecs.forEach(({ title, selected }) => {
      if (selected) {
        finalSpecList.push(title);
      }
    });

    return finalSpecList;
  },
}));
