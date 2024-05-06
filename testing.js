const decksArray = [
  {
    title: "Deck1",
    flashcards: [
      {
        question: "Question1 for deck 1", 
        answer: "Answer1 for deck 1 ",
      }
    ],
  },
  {
    title: "Deck2", 
    flashcards: [
      {
        question: "Quesion for deck2", 
        answer: "Answer for deck2", 
      },
      {
        question: "Quesion for deck2", 
        answer: "Answer for deck2", 
      },
      {
        question: "Quesion for deck2", 
        answer: "Answer for deck2", 
      },
      {
        question: "Quesion for deck2", 
        answer: "Answer for deck2", 
      },
      {
        question: "Quesion for deck2", 
        answer: "Answer for deck2", 
      },
      {
        question: "Quesion for deck2", 
        answer: "Answer for deck2", 
      },
      {
        question: "Quesion for deck2", 
        answer: "Answer for deck2", 
      },
    ], 
  },
];


console.log(decksArray[0].flashcards); 
console.log("---------"); 

decksArray.forEach(deck => {
  console.log(deck); 
});


//Find the index of the first element greater than 25

/*const deckIndex = decksArray.findIndex(deck => deck.title === "Deck2");

if (deckIndex !== -1) {
  console.log(`Index of 'Deck2': ${deckIndex}`);
} else {
  console.log("Deck not found.");
}*/
