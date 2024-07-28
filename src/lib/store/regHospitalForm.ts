import { create } from "zustand";
import { RegHospitalState } from "../types";

const regHospitalForm = create<RegHospitalState>((set) => ({
  hospitalName: "",
  description: "",
  coverImage: "",
  specialities: [],
  facilities: [],
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
