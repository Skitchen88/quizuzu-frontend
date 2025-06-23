const starWarsQuiz = {
  id: "star-wars",
  title: "Find the Force Within – Your Star Wars Identity",
  description: "Which Star Wars character best matches your personality?",
  questions: [
    {
      id: 1,
      text: "You’re handed a lightsaber. What’s your first move?",
      options: [
        { text: "Ignite it and practice immediately", value: "Luke" },
        { text: "Sell it to the highest bidder", value: "Han" },
        { text: "Hide it away for safekeeping", value: "Leia" },
        { text: "Meditate with it to understand its meaning", value: "Yoda" },
      ],
    },
    {
      id: 2,
      text: "Your ideal role in a rebellion is:",
      options: [
        { text: "Leading from the front", value: "Leia" },
        { text: "Flying into battle solo", value: "Han" },
        { text: "Training new Jedi", value: "Luke" },
        { text: "Offering wisdom and guidance", value: "Yoda" },
      ],
    },
    {
      id: 3,
      text: "How do you handle conflict?",
      options: [
        { text: "With diplomacy and strength", value: "Leia" },
        { text: "By blasting my way out", value: "Han" },
        { text: "By trusting the Force", value: "Luke" },
        { text: "By seeking balance and patience", value: "Yoda" },
      ],
    },
    {
      id: 4,
      text: "Choose a motto:",
      options: [
        { text: "Do or do not. There is no try.", value: "Yoda" },
        { text: "Never tell me the odds.", value: "Han" },
        { text: "Hope is not lost today—it is found.", value: "Leia" },
        { text: "I am a Jedi, like my father before me.", value: "Luke" },
      ],
    },
    {
      id: 5,
      text: "Your greatest strength is:",
      options: [
        { text: "Loyalty and courage", value: "Leia" },
        { text: "Charm and instinct", value: "Han" },
        { text: "Faith and determination", value: "Luke" },
        { text: "Wisdom and clarity", value: "Yoda" },
      ],
    },
  ],
};

export default starWarsQuiz;
