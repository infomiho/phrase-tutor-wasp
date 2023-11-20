import { FetchAllPhrases } from "@wasp/queries/types";
import { FetchLanguages } from "@wasp/queries/types";

export const getAllPhrases = (async (_args, context) => {
  return context.entities.Phrase.findMany({
    include: {
      translations: true,
    },
  });
}) satisfies FetchAllPhrases<{}>;

export const getLanguages = (async (_args, context) => {
  const languages = await context.entities.Language.findMany({});
  const english = languages.find((l) => l.name === "English")!;
  const italian = languages.find((l) => l.name === "Italian")!;
  return {
    languages: languages,
    defaultFromId: italian.id,
    defaultToId: english.id,
  };
}) satisfies FetchLanguages<{}>;
