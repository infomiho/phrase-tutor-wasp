import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useGeneralStore = create(
    persist(
        (set, get) => ({
            introDismissed: false,
            dismiss: () => set((state) => ({ introDismissed: true }))
        }),
        {
            name: "general-storage"
        }
    )
);
