import { useMemo } from "react";

import styles from "./StatsBox.module.css";

export function StatsBox({ phrase, stats }) {
    return (
        <div
            className={`${styles.StatsBox} ${
                stats.total > 0 && stats.correctPercentage < 50 && styles.low
            }`}
        >
            <div className={styles.StatsBoxPhrase}>
                <div className={styles.StatsBoxPhraseText}>
                    {phrase.translations[0].translation}
                    {stats.total === 0 && (
                        <span className={styles.NewTag}>New</span>
                    )}
                </div>
                <div className={styles.StatsBoxPhraseTranslations}>
                    {phrase.phrase}
                </div>
            </div>
            {stats.total > 0 && (
                <div className={styles.StatsBoxDetails}>
                    {stats.correctPercentage}%{" "}
                    {stats.correctPercentage > 70 && <span>✨</span>}
                </div>
            )}
        </div>
    );
}
