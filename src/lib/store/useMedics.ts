import { create } from "zustand";

type MedicType = {
  name: string;
  description: string;
  imageUrl: string;
  speciality: string;
  patients: number;
  experience: number;
  rating: number;
  emailAddress: string;
  phoneNumber: string;
};

type MedicsStateType = {
  activeMedic: MedicType | any;
  addMedics: (medic: MedicType) => void;
  removeMedic: () => void;
};

const useMedics = create<MedicsStateType>((set, get) => ({
  activeMedic: null,
  addMedics: (medic) => {
    set(() => ({
      activeMedic: medic,
    }));
  },
  removeMedic: () => {
    set(() => ({
      activeMedic: null,
    }));
  },
}));

export default useMedics;
