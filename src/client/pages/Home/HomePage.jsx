import { useState, useEffect } from "react";

import { Layout } from "../../components/Layout";
import { QuestionBox } from "../../components/QuestionBox";
import { ContentLoader } from "../../components/ContentLoader";
import { LanguageSelector } from "../../components/LanguageSelector";

import styles from "./Home.module.css";

import { useQuery } from "@wasp/queries";
import fetchAllPhrases from "@wasp/queries/fetchAllPhrases";

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
        <Layout>
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
        </Layout>
    );
};
export default MainPage;
