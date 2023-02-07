// @ts-check
import { useState, useEffect } from "react";

import styles from "./QuestionBox.module.css";

import { SayButton } from "./SayButton";

import { useStatsStore } from "../stores/stats";
import { useLanguagesStore } from "../stores/languages";

export function QuestionBox({ phrase, onNext }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const addCorrectAnswer = useStatsStore((state) => state.addCorrectAnswer);
    const addWrongAnswer = useStatsStore((state) => state.addWrongAnswer);

    const fromLanguage = useLanguagesStore((state) => state.from);
    const toLanguage = useLanguagesStore((state) => state.to);

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    useEffect(() => {
        if (!fromLanguage || !toLanguage) {
            return;
        }
        setFrom(findTranslation(phrase, fromLanguage.id));
        setTo(findTranslation(phrase, toLanguage.id));
    }, [phrase, fromLanguage, toLanguage]);

    function handleNext({ isCorrect }) {
        return () => {
            if (isCorrect) {
                addCorrectAnswer(phrase.id);
            } else {
                addWrongAnswer(phrase.id);
            }
            setShowAnswer(false);
            onNext();
        };
    }

    return (
        from &&
        to && (
            <div className={styles.QuestionBox}>
                <div className={styles.QuestionBoxText}>
                    Please translate:
                    <div className={styles.QuestionBoxForeign}>
                        {from.translation} {/* <SayButton /> */}
                    </div>
                </div>
                {!showAnswer && (
                    <button className={styles.button} onClick={setShowAnswer}>
                        Show answer
                    </button>
                )}
                {showAnswer && (
                    <>
                        <div className={styles.QuestionBoxAnswer}>
                            <div className={styles.QuestionBoxAnswerText}>
                                {to.translation}
                            </div>
                            {/* <SayButton /> */}
                        </div>
                        <button
                            className={`${styles.button} ${styles.correct}`}
                            onClick={handleNext({ isCorrect: true })}
                        >
                            I knew it
                        </button>
                        <button
                            className={`${styles.button} ${styles.incorrect}`}
                            onClick={handleNext({ isCorrect: false })}
                        >
                            Nope
                        </button>
                    </>
                )}
            </div>
        )
    );
}

function findTranslation(phrase, languageId) {
    return phrase.translations.find((t) => t.languageId === languageId);
}
