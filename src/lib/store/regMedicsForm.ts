import {
  hospital_specs,
  hospital_treatment,
  HospSpec,
  HospTreat,
} from "@/contants/hospital-fts";
import { create } from "zustand";

type MedicsAvail = {
  day: string;
  times: {
    startTime: string;
    endTime: string;
  }[];
};

type RegMedicsState = {
  medicsName: string;
  bio: string;
  profileImage: any;
  availability: MedicsAvail[];

  address: {
    city: string;
    state: string;
    country: string;
  };

  experience: number;
  institution: string;
  contact: {
    emailAddress: string;
    phoneNumber: string;
  };

  changeValue: (name: string, value: any) => void;
  resetAllValue: () => void;
};

const regMedicsForm = create<RegMedicsState>((set) => ({
  medicsName: "",
  bio: "",
  profileImage: null,
  availability: [],
  address: {
    city: "",
    state: "",
    country: "",
  },

  experience: 0,
  institution: "",

  contact: {
    emailAddress: "",
    phoneNumber: "",
  },
  changeValue: (name, value) => {
    set(() => ({
      [name]: value,
    }));
  },
  resetAllValue: () => {
    set(() => ({
      medicsName: "",
      bio: "",
      profileImage: null,
      availability: [],
      address: {
        city: "",
        state: "",
        country: "",
      },
      experience: 0,
      institution: "",
      contact: {
        emailAddress: "",
        phoneNumber: "",
      },
    }));
  },
}));

export default regMedicsForm;

type MedicsTreatList = {
  availableTreatment: HospTreat[];
  selectTreat: (categoryIndex: number, treatIndex: number) => void;
  getSelectedTreat: () => string[];
  resetTreat: () => void;
};

export const useMedicsTreatmentList = create<MedicsTreatList>((set, get) => ({
  availableTreatment: [...hospital_treatment],

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

  resetTreat: () => {
    set(() => ({
      availableTreatment: [...hospital_treatment],
    }));
  },
}));

type MedicsSpecsList = {
  availableSpecs: HospSpec[];
  selectSpec: (specIndex: number) => void;
  getSelectedSpec: () => string[];
  resetSpec: () => void;
};

export const useMedicsSpecsList = create<MedicsSpecsList>((set, get) => ({
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
  resetSpec: () => {
    set(() => ({
      availableSpecs: hospital_specs,
    }));
  },
}));
