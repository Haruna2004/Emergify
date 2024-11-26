export type Message = {
  role: string;
  parts: {
    text: string;
  }[];
};

export type HospitalType = {
  id: string;
  hospitalName: string;
  description: string;
  coverImage: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  };
  contact: {
    phone2: string;
    phone1: string;
    emailAddress: string;
  };
  googleMapLink: string;
  treatments: string[];
  specialities: string[];
  score: number;
  // undetermined
  distance: number;
  open: boolean;
};

export type RegHospitalState = {
  hospitalName: string;
  description: string;
  coverImage: string | null | any;

  contact: {
    phone1: string;
    phone2: string;
    emailAddress: string;
  };
  googleMapLink: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  };
  // methods
  changeValue: (name: string, value: string | string[] | {} | null) => void;
  resetAllValue: () => void;
};

export type PatientType = {
  specialities: string[];
  treatments: string[];
};
