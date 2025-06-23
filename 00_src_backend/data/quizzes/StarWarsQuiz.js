const StarWarsQuiz = {
  id: "star-wars",
  title: "Find the Force Within: Your Star Wars Identity",
  description: "Answer these questions to discover which iconic Star Wars character matches your inner Force.",
  questions: [
    {
      id: 1,
      text: "What motivates you the most?",
      options: [
        { text: "Adventure", scores: { Luke: 2, Han: 1 } },
        { text: "Justice", scores: { Leia: 2, Yoda: 1 } },
        { text: "Power", scores: { Vader: 2, Emperor: 1 } },
        { text: "Loyalty", scores: { Chewbacca: 2, C3PO: 1 } }
      ]
    },
    {
      id: 2,
      text: "Pick a weapon:",
      options: [
        { text: "Blue Lightsaber", scores: { Luke: 2, Leia: 1 } },
        { text: "Blaster", scores: { Han: 2, Chewbacca: 1 } },
        { text: "Red Lightsaber", scores: { Vader: 2, Emperor: 1 } },
        { text: "Diplomacy", scores: { C3PO: 2, Yoda: 1 } }
      ]
    },
    {
      id: 3,
      text: "Your ideal sidekick is...",
      options: [
        { text: "A wise mentor", scores: { Yoda: 2, Luke: 1 } },
        { text: "A loyal friend", scores: { Chewbacca: 2, Han: 1 } },
        { text: "A scheming ally", scores: { Emperor: 2, Vader: 1 } },
        { text: "A tech-savvy companion", scores: { C3PO: 2, Leia: 1 } }
      ]
    },
    // (Add the remaining 22 questions in this same format)
  ],
  outcomes: {
    Luke: {
      name: "Luke Skywalker",
      description: "You are courageous and hopeful, always seeking adventure and truth.",
    },
    Leia: {
      name: "Princess Leia",
      description: "You are strong, wise, and driven by a deep sense of justice and responsibility.",
    },
    Han: {
      name: "Han Solo",
      description: "You’re independent and charming, with a soft spot for your friends.",
    },
    Vader: {
      name: "Darth Vader",
      description: "You’re powerful and intense, but there may still be good in you.",
    },
    Yoda: {
      name: "Yoda",
      description: "You are calm and full of wisdom, always focused on the greater good.",
    },
    Emperor: {
      name: "Emperor Palpatine",
      description: "You thrive on control and cunning, always seeking to rise to the top.",
    },
    Chewbacca: {
      name: "Chewbacca",
      description: "You are fiercely loyal and brave, with a heart as big as your roar.",
    },
    C3PO: {
      name: "C-3PO",
      description: "You’re logical and cautious, often the voice of reason in the group.",
    }
  }
};

export default StarWarsQuiz;
