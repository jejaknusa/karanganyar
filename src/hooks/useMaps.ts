import type { Destination } from "@/types/destination";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MapsState {
  showList: boolean;
  destination: Destination;
  setDestination: (destination: Destination) => void;
  removeDestination: () => void;
  toogleList: () => void;
}
export const useMaps = create<MapsState>()(
  persist(
    (set) => ({
      showList: true,
      destination: {} as Destination,
      setDestination: (data: Destination) => set({ destination: data }),
      removeDestination: () => set({ destination: {} as Destination }),
      toogleList: () => set((state) => ({ showList: !state.showList })),
    }),
    { name: "maps" },
  ),
);
