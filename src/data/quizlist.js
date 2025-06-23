const quizlist = [
  {
    quizNumber: '000001',
    filename: 'star-wars',
    title: 'Star Wars Personality Quiz',  // ✅ Added this line
    topic: 'Star Wars',
    keywords: ['star wars', 'jedi', 'sith', 'galaxy', 'yoda', 'vader', 'force', 'space', 'rebels', 'empire'],
    category: 'Movies',
    genre: 'Sci-Fi',
    quizType: 'Personality',
    takenCount: 0,
    outcomeStats: {
      'Han Solo': 0,
      'Luke Skywalker': 0,
      'Leia Organa': 0,
      'Darth Vader': 0,
      'Yoda': 0,
      'C-3PO': 0
    }
  }
];

export default quizlist;
