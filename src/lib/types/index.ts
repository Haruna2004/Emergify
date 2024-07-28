export type Message = {
  role: string;
  parts: {
    text: string;
  }[];
};

export type RegHospitalState = {
  hospitalName: string;
  description: string;
  coverImage: string;

  specialities: string[];
  facilities: string[];
  treatments: string[];

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
  changeValue: (name: string, value: string | string[] | {}) => void;
};
