import { create } from "zustand";

type ToggleType = {
  sidebar: boolean;
  toggleSidebar: () => void;
};

const useToggleStore = create<ToggleType>((set, get) => ({
  sidebar: false,
  toggleSidebar: () => {
    set((state) => ({
      sidebar: !state.sidebar,
    }));
  },
}));

export default useToggleStore;
