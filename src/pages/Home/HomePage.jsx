import { useQuery, fetchAllPhrases } from "wasp/client/operations";
import { useState, useEffect } from "react";

import { QuestionBox } from "../../components/QuestionBox";
import { ContentLoader } from "../../components/ContentLoader";
import { LanguageSelector } from "../../components/LanguageSelector";

import styles from "./Home.module.css";

import { getRandomPhrase } from "../../helpers/phrases";
import { useStatsStore } from "../../stores/stats";

const MainPage = () => {
    const { data: phrases, isLoading } = useQuery(fetchAllPhrases);
    const [currentPhrase, setCurrentPhrase] = useState(null);

    const stats = useStatsStore((state) => state.stats);

    function handleNextPhrase() {
        const nextPhrase = getRandomPhrase(phrases, stats);
        setCurrentPhrase(nextPhrase);
    }

    useEffect(() => {
        if (!phrases) {
            return;
        }
        handleNextPhrase();
    }, [phrases]);
    return (
        <main className={styles.home}>
            {isLoading && <ContentLoader />}
            {currentPhrase && (
                <div className={styles.content}>
                    <LanguageSelector />
                    <QuestionBox
                        phrase={currentPhrase}
                        onNext={handleNextPhrase}
                    />
                </div>
            )}
        </main>
    );
};
export default MainPage;
