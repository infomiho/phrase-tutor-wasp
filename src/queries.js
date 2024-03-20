export async function getAllPhrases(args, context) {
    return context.entities.Phrase.findMany({
        include: {
            translations: true
        }
    });
}

export async function getLanguages(args, context) {
    const languages = await context.entities.Language.findMany({});
    const english = languages.find((l) => l.name === "English");
    const italian = languages.find((l) => l.name === "Italian");
    return {
        languages: languages,
        defaultFromId: italian.id,
        defaultToId: english.id
    };
}
