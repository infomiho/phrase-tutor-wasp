import { useMemo } from "react";

import { StatsBox } from "../../components/StatsBox";
import { ContentLoader } from "../../components/ContentLoader";

import styles from "./Stats.module.css";

import { useQuery } from "@wasp/queries";
import fetchAllPhrases from "@wasp/queries/fetchAllPhrases";

import { useStatsStore } from "../../stores/stats";

const StatsPage = () => {
    const phrases = useQuery(fetchAllPhrases);
    const stats = useStatsStore((state) => state.stats);
    const resetStats = useStatsStore((state) => state.resetStats);
    const statsSorted = useMemo(() => {
        if (!phrases.data || !stats) {
            return null;
        }
        return phrases.data
            .map((phrase) => {
                const rawStats = stats[phrase.id];
                const phraseStats = {
                    total: rawStats?.total || 0,
                    correctPercentage:
                        rawStats && rawStats.total > 0
                            ? Math.floor(
                                  (rawStats.correct / rawStats.total) * 10000
                              ) / 100
                            : null
                };
                return {
                    phrase,
                    stats: phraseStats
                };
            })
            .sort((a, b) => {
                if (a.stats.correctPercentage === null) {
                    return 1;
                }
                if (b.stats.correctPercentage === null) {
                    return -1;
                }
                return a.stats.correctPercentage - b.stats.correctPercentage;
            });
    }, [phrases.data, stats]);
    const statsSummary = useMemo(() => calculateSummary(stats), [stats]);
    return (
        <div className={styles.stats}>
            <p className={styles.summary}>
                <strong>
                    {statsSummary.total} phrases played /{" "}
                    {statsSummary.correctPercentage}% success
                </strong>
            </p>
            <p>
                If you want to restart, you can{" "}
                <button className={`a ${styles.a}`} onClick={resetStats}>
                    delete your stats
                </button>
                .
            </p>
            {phrases.isLoading && <ContentLoader />}
            <div className={styles.StatsBoxes}>
                {statsSorted &&
                    statsSorted.map((data) => (
                        <StatsBox
                            key={data.phrase.id}
                            phrase={data.phrase}
                            stats={data.stats}
                        />
                    ))}
            </div>
        </div>
    );
};

export default StatsPage;

function calculateSummary(stats) {
    const summary = Object.values(stats).reduce(
        (acc, { total, correct, incorrect }) => {
            acc.total += total;
            acc.correct += correct;
            acc.incorrect += incorrect;
            return acc;
        },
        { total: 0, correct: 0, incorrect: 0 }
    );
    return {
        total: summary.total,
        correctPercentage:
            summary.total > 0
                ? Math.floor((summary.correct / summary.total) * 10000) / 100
                : 0
    };
}
