export function getRandomPhrase(phrases, stats) {
    const phrasesWithScore = phrases.map((phrase) => {
        const phraseStats = stats[phrase.id];
        const score =
            phraseStats && phraseStats.total > 0
                ? (phraseStats.incorrect / phraseStats.total) * 100 + 1
                : 200;
        return { phrase, score };
    });

    // Do roulette wheel selection
    const totalScore = phrasesWithScore.reduce(
        (total, phraseWithScore) => total + phraseWithScore.score,
        0
    );
    const randomScore = Math.random() * totalScore;
    let currentScore = 0;
    for (const phraseWithScore of phrasesWithScore) {
        currentScore += phraseWithScore.score;
        if (currentScore >= randomScore) {
            return phraseWithScore.phrase;
        }
    }

    return null;
}
