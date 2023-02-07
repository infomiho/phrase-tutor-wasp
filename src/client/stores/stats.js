import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStatsStore = create(
    persist(
        (set) => ({
            stats: {},
            addCorrectAnswer: (phraseId) =>
                set((state) => {
                    const newStats = updateStats(state.stats, phraseId, true);
                    return { stats: newStats };
                }),
            addWrongAnswer: (phraseId) =>
                set((state) => {
                    const newStats = updateStats(state.stats, phraseId, false);
                    return { stats: newStats };
                }),
            resetStats: () => set({ stats: {} })
        }),
        {
            name: "stats-storage"
        }
    )
);

function updateStats(stats, phraseId, isCorrect) {
    const newStats = stats;
    const phraseStats = newStats[phraseId] || {
        correct: 0,
        incorrect: 0,
        total: 0
    };
    if (isCorrect) {
        phraseStats.correct += 1;
    } else {
        phraseStats.incorrect += 1;
    }
    phraseStats.total += 1;
    newStats[phraseId] = phraseStats;
    return newStats;
}
