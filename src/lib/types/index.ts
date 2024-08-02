export type Message = {
  role: string;
  parts: {
    text: string;
  }[];
};

export type HospitalType = {
  id: string;
  name: string;
  imageUrl: string;
  address: string;
  open: boolean;
  rating: number;
  distance: number;
  score: number;
  number_of_rating: number;
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
