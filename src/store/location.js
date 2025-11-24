import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { locations } from "#constants/index.js";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
    immer((set) => (
        {
            activeLocation: DEFAULT_LOCATION,

            setActiveLocation: (location) => set((state) => {
                if(location === undefined) return;
                state.activeLocation = location;
            }),

            resetActiveLocation: () => set((state) => {
                state.activeLocation = DEFAULT_LOCATION;
            })
        }
    ))
);

export default useLocationStore;