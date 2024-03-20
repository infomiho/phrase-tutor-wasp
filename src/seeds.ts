import { PrismaClient } from "@prisma/client";

export async function seedItalianPhrases(prisma: PrismaClient) {
  const existingPhrases = await prisma.phrase.findMany({});
  if (existingPhrases.length > 0) {
    return;
  }
  const data = [
    {
      id: 1,
      group: "general",
      translations_en: "Yes",
      translations_it: "Si",
    },
    {
      id: 2,
      group: "general",
      translations_en: "No",
      translations_it: "No",
    },
    {
      id: 3,
      group: "general",
      translations_en: "Please",
      translations_it: "Per favore",
    },
    {
      id: 4,
      group: "general",
      translations_en: "Thank you",
      translations_it: "Grazie",
    },
    {
      id: 5,
      group: "general",
      translations_en: "You're welcome",
      translations_it: "Prego",
    },
    {
      id: 6,
      group: "general",
      translations_en: "Cheers! (To your health)",
      translations_it: "Salute!",
    },
    {
      id: 7,
      group: "general",
      translations_en: "Excuse me (for attention)",
      translations_it: "Scusi",
    },
    {
      id: 8,
      group: "general",
      translations_en: "Excuse me (to pass by)",
      translations_it: "Permesso",
    },
    {
      id: 9,
      group: "general",
      translations_en: "Do you speak English?",
      translations_it: "Parla Inglese?",
    },
    {
      id: 10,
      group: "general",
      translations_en: "I don't understand",
      translations_it: "Non capisco",
    },
    {
      id: 11,
      group: "general",
      translations_en: "I'm sorry",
      translations_it: "Mi dispiace",
    },
    {
      id: 12,
      group: "greetings",
      translations_en: "Good morning (formal)",
      translations_it: "Buon giorno",
    },
    {
      id: 13,
      group: "greetings",
      translations_en: "Good afternoon (formal)",
      translations_it: "Buona sera",
    },
    {
      id: 14,
      group: "greetings",
      translations_en: "Good night (formal)",
      translations_it: "Buona notte",
    },
    {
      id: 15,
      group: "greetings",
      translations_en: "Hi / Bye (informal)",
      translations_it: "Ciao!",
    },
    {
      id: 16,
      group: "greetings",
      translations_en: "Good bye (formal)",
      translations_it: "Arrivederci",
    },
    {
      id: 17,
      group: "general",
      translations_en: "My name is …",
      translations_it: "Mi chiamo",
    },
    {
      id: 18,
      group: "general",
      translations_en: "What is your name?",
      translations_it: "Come si chiama?",
    },
    {
      id: 19,
      group: "general",
      translations_en: "Pleased to meet you",
      translations_it: "Piacere",
    },
    {
      id: 20,
      group: "general",
      translations_en: "How are you? (formal)",
      translations_it: "Come sta?",
    },
    {
      id: 21,
      group: "general",
      translations_en: "Good thank you",
      translations_it: "Bene grazie",
    },
    {
      id: 22,
      group: "numbers",
      translations_en: "One",
      translations_it: "Uno",
    },
    {
      id: 23,
      group: "numbers",
      translations_en: "Two",
      translations_it: "Due",
    },
    {
      id: 24,
      group: "numbers",
      translations_en: "Three",
      translations_it: "Tre",
    },
    {
      id: 25,
      group: "numbers",
      translations_en: "Four",
      translations_it: "Quattro",
    },
    {
      id: 26,
      group: "numbers",
      translations_en: "Five",
      translations_it: "Cinque",
    },
    {
      id: 27,
      group: "numbers",
      translations_en: "Six",
      translations_it: "Sei",
    },
    {
      id: 28,
      group: "numbers",
      translations_en: "Seven",
      translations_it: "Sette",
    },
    {
      id: 29,
      group: "numbers",
      translations_en: "Eight",
      translations_it: "Otto",
    },
    {
      id: 30,
      group: "numbers",
      translations_en: "Nine",
      translations_it: "Nove",
    },
    {
      id: 31,
      group: "numbers",
      translations_en: "Ten",
      translations_it: "Dieci",
    },
    {
      id: 32,
      group: "numbers",
      translations_en: "Eleven",
      translations_it: "Undici",
    },
    {
      id: 33,
      group: "numbers",
      translations_en: "Twelve",
      translations_it: "Dodici",
    },
    {
      id: 34,
      group: "general",
      translations_en: "In the morning",
      translations_it: "Di Mattina",
    },
    {
      id: 35,
      group: "general",
      translations_en: "In the afternoon",
      translations_it: "Di pomeriggio",
    },
    {
      id: 36,
      group: "general",
      translations_en: "In the evening",
      translations_it: "Di Sera",
    },
    {
      id: 37,
      group: "general",
      translations_en: "Noon",
      translations_it: "Mezzogiorno",
    },
    {
      id: 38,
      group: "general",
      translations_en: "At what time?",
      translations_it: "A che ora?",
    },
    {
      id: 39,
      group: "general",
      translations_en: "Nine o'clock in the morning",
      translations_it: "Le nove",
    },
    {
      id: 40,
      group: "general",
      translations_en: "Eight o'clock in the evening",
      translations_it: "Le otto di sera",
    },
    {
      id: 41,
      group: "days",
      translations_en: "Monday",
      translations_it: "Lunedì",
    },
    {
      id: 42,
      group: "days",
      translations_en: "Tuesday",
      translations_it: "Martedì",
    },
    {
      id: 43,
      group: "days",
      translations_en: "Wednesday",
      translations_it: "Mercoledì",
    },
    {
      id: 44,
      group: "days",
      translations_en: "Thursday",
      translations_it: "Giovedì",
    },
    {
      id: 45,
      group: "days",
      translations_en: "Friday",
      translations_it: "Venerdì",
    },
    {
      id: 46,
      group: "days",
      translations_en: "Saturday",
      translations_it: "Sabato",
    },
    {
      id: 47,
      group: "days",
      translations_en: "Sunday",
      translations_it: "Domenica",
    },
    {
      id: 48,
      group: "days",
      translations_en: "Today",
      translations_it: "Oggi",
    },
    {
      id: 49,
      group: "days",
      translations_en: "Yesterday",
      translations_it: "Ieri",
    },
    {
      id: 50,
      group: "days",
      translations_en: "Tomorrow",
      translations_it: "Domani",
    },
    {
      id: 51,
      group: "general",
      translations_en: "Can I see the menu please?",
      translations_it: "Il menu, per favore",
    },
    {
      id: 52,
      group: "general",
      translations_en: "What do you recommend?",
      translations_it: "Che cosa ci consiglia?",
    },
    {
      id: 53,
      group: "general",
      translations_en: "I'm allergic to…",
      translations_it: "Sono allergica/o a...",
    },
    {
      id: 54,
      group: "general",
      translations_en: "Gluten / Dairy / Fish",
      translations_it: "Glutine / Lattecini / Pesce",
    },
    {
      id: 55,
      group: "general",
      translations_en: "House wine",
      translations_it: "Vino della casa",
    },
    {
      id: 56,
      group: "general",
      translations_en: "Red / white wine",
      translations_it: "Vino rosso / bianco",
    },
    {
      id: 57,
      group: "general",
      translations_en: "A glass / bottle",
      translations_it: "Una bicchiere / una bottiglia",
    },
    {
      id: 58,
      group: "general",
      translations_en: "Appetizer",
      translations_it: "Antipasto",
    },
    {
      id: 59,
      group: "general",
      translations_en: "First course",
      translations_it: "Primo",
    },
    {
      id: 60,
      group: "general",
      translations_en: "Second course",
      translations_it: "Secondo",
    },
    {
      id: 61,
      group: "general",
      translations_en: "Dessert",
      translations_it: "Dolci",
    },
    {
      id: 62,
      group: "general",
      translations_en: "Two flavors please",
      translations_it: "Due gusti, per favore",
    },
    {
      id: 63,
      group: "general",
      translations_en: "Where's the bathroom?",
      translations_it: "Dov'è il bagno?",
    },
    {
      id: 64,
      group: "general",
      translations_en: "The check (bill) please",
      translations_it: "Il conto, per favore",
    },
    {
      id: 65,
      group: "general",
      translations_en: "Can I pay by card?",
      translations_it: "Posso pagare con la carta?",
    },
    {
      id: 66,
      group: "general",
      translations_en: "When does it open / close?",
      translations_it: "Quando si apri / chiude?",
    },
    {
      id: 67,
      group: "general",
      translations_en: "Two adults / one child",
      translations_it: "Due adulti / un bambino",
    },
    {
      id: 68,
      group: "general",
      translations_en: "One / two ticket/s",
      translations_it: "Un / due biglietto/i",
    },
    {
      id: 69,
      group: "general",
      translations_en: "One senior",
      translations_it: "Un pensionato",
    },
    {
      id: 70,
      group: "general",
      translations_en: "One student",
      translations_it: "Uno studente",
    },
    {
      id: 71,
      group: "general",
      translations_en: "Where is the bag store / cloak room?",
      translations_it: "Dov'è la guardaroba?",
    },
    {
      id: 72,
      group: "general",
      translations_en: "Where is… ?",
      translations_it: "Dov'è…?",
    },
    {
      id: 73,
      group: "general",
      translations_en: "Entrance",
      translations_it: "Entrata",
    },
    {
      id: 74,
      group: "general",
      translations_en: "Exit",
      translations_it: "Uscita",
    },
    {
      id: 75,
      group: "general",
      translations_en: "Left",
      translations_it: "Sinistra",
    },
    {
      id: 76,
      group: "general",
      translations_en: "Right",
      translations_it: "Destra",
    },
    {
      id: 77,
      group: "general",
      translations_en: "Straight ahead",
      translations_it: "Dritto",
    },
    {
      id: 78,
      group: "general",
      translations_en: "Forward",
      translations_it: "Avanti",
    },
    {
      id: 79,
      group: "general",
      translations_en: "Back",
      translations_it: "Dietro",
    },
    {
      id: 80,
      group: "general",
      translations_en: "Where is the train station?",
      translations_it: "Dov'è la stazione?",
    },
    {
      id: 81,
      group: "general",
      translations_en: "Where is the bus stop?",
      translations_it: "Dov'è la fermata",
    },
    {
      id: 82,
      group: "general",
      translations_en: "One / two ticket/s",
      translations_it: "Un / due biglietto/i",
    },
    {
      id: 83,
      group: "general",
      translations_en: "One way",
      translations_it: "Andata",
    },
    {
      id: 84,
      group: "general",
      translations_en: "Return",
      translations_it: "Ritorno",
    },
    {
      id: 85,
      group: "general",
      translations_en: "What platform for Rome?",
      translations_it: "Da quale binario per Roma?",
    },
    {
      id: 86,
      group: "general",
      translations_en: "Newstand (for bus tickets)",
      translations_it: "Tabacchi",
    },
    {
      id: 87,
      group: "general",
      translations_en: "I would like…",
      translations_it: "Vorrei…",
    },
    {
      id: 88,
      group: "general",
      translations_en: "How much is this?",
      translations_it: "Quanto costa questo?",
    },
    {
      id: 89,
      group: "general",
      translations_en: "OK I'll take it",
      translations_it: "Va bene, lo prendo",
    },
    {
      id: 90,
      group: "general",
      translations_en: "I don't want it",
      translations_it: "Non lo voglio",
    },
    {
      id: 91,
      group: "general",
      translations_en: "Can you ship to…?",
      translations_it: "Puoi spedire a?",
    },
    {
      id: 92,
      group: "general",
      translations_en: "Help!",
      translations_it: "Aiuto!",
    },
    {
      id: 93,
      group: "general",
      translations_en: "I need a doctor",
      translations_it: "Ho bisogno di un dottore",
    },
    {
      id: 94,
      group: "general",
      translations_en: "Call the police",
      translations_it: "Chiami la polizia",
    },
    {
      id: 95,
      group: "general",
      translations_en: "Look out!",
      translations_it: "Attento!",
    },
    {
      id: 96,
      group: "general",
      translations_en: "Go away!",
      translations_it: "Vai via!",
    },
  ];
  const seedPhrases = data.map((phrase) => {
    return {
      phrase: phrase.translations_en,
      group: phrase.group,
      translation: phrase.translations_it,
    };
  });
  let italian = await prisma.language.findUnique({
    where: {
      name: "Italian",
    },
  });
  let english = await prisma.language.findUnique({
    where: {
      name: "English",
    },
  });
  if (!italian) {
    italian = await prisma.language.create({
      data: {
        name: "Italian",
        emoji: "🇮🇹",
      },
    });
  }
  if (!english) {
    english = await prisma.language.create({
      data: {
        name: "English",
        emoji: "🇬🇧",
      },
    });
  }
  for (const phrase of seedPhrases) {
    await prisma.phrase.create({
      data: {
        phrase: phrase.phrase,
        group: phrase.group,
        translations: {
          create: [
            {
              translation: phrase.phrase,
              language: {
                connect: {
                  id: english.id,
                },
              },
            },
            {
              translation: phrase.translation,
              language: {
                connect: {
                  id: italian.id,
                },
              },
            },
          ],
        },
      },
    });
  }
}
