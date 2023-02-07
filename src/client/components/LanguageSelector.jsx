import { useEffect } from "react";

import styles from "./LanguageSelector.module.css";

import { useLanguagesStore } from "../stores/languages";

import { useQuery } from "@wasp/queries";
import fetchLanguages from "@wasp/queries/fetchLanguages";

export function LanguageSelector() {
    const { data: languagesData } = useQuery(fetchLanguages);
    const setLanguages = useLanguagesStore((state) => state.setLanguages);
    const setFromIfMissing = useLanguagesStore(
        (state) => state.setFromIfMissing
    );
    const setToIfMissing = useLanguagesStore((state) => state.setToIfMissing);
    const switchFromTo = useLanguagesStore((state) => state.switchFromTo);
    const fromLanguage = useLanguagesStore((state) => state.from);
    const toLanguage = useLanguagesStore((state) => state.to);

    useEffect(() => {
        if (!languagesData) {
            return;
        }
        const { languages, defaultFromId, defaultToId } = languagesData;
        setLanguages(languages);
        setFromIfMissing(defaultFromId);
        setToIfMissing(defaultToId);
    }, [languagesData]);
    return (
        fromLanguage &&
        toLanguage && (
            <h1 className={styles.title} onClick={switchFromTo}>
                Learn{" "}
                <button className={styles.button}>
                    {fromLanguage.emoji} to {toLanguage.emoji}
                </button>
            </h1>
        )
    );
}
