import React from "react";
import { create } from "zustand";

type ImageStoreType = {
  images: any[];
  getImage: (index: number) => any;
  addImage: (file: any, setValue: React.SetStateAction<any>) => any;
};

export const useImageStore = create<ImageStoreType>((set, get) => ({
  images: [],
  getImage: (index) => {
    return get().images[index];
  },
  addImage: async (file, setValue) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      //@ts-ignore
      const base64String = reader.result.split(",")[1];

      const newImage = {
        fileContent: base64String,
        fileType: "image/jpg",
        id: get().images.length + 1,
      };

      set((state) => ({
        images: [...state.images, newImage],
      }));
      setValue(newImage);
    };

    // console.log(get().images.length);
    // return get().images.length + 1;
  },
}));
