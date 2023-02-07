import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguagesStore = create(
    persist(
        (set, get) => ({
            languages: [],
            from: null,
            to: null,
            setLanguages: (languages) => set({ languages }),
            setFromIfMissing: (fromId) =>
                set((state) => ({
                    from:
                        state.from &&
                        findLanguage(state.languages, state.from.id)
                            ? state.from
                            : findLanguage(state.languages, fromId)
                })),
            setToIfMissing: (toId) =>
                set((state) => ({
                    to:
                        state.to && findLanguage(state.languages, state.to.id)
                            ? state.to
                            : findLanguage(state.languages, toId)
                })),
            switchFromTo: () =>
                set((state) => ({ from: state.to, to: state.from }))
        }),
        {
            name: "languages-storage"
        }
    )
);

function findLanguage(languages, languageId) {
    return languages.find((l) => l.id === languageId);
}
