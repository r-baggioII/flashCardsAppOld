//LinkedList implementation for JavaScript 

//FlashCard class 
class FlashCard {
    constructor(question,answer) {
      this.question = question;
      this.answer = answer; 
      this.nextCard = null;
    }
}
//LinkedList class   
class LinkedList {
    constructor() {
        this.head = null; 
    }
}

//Deck Class
class Deck {
    constructor(title){
        this. title = title;
        this.cards = new LinkedList(); 
    }
}


function showCards(L){
    let currentNode = L.head 
    while (currentNode !== null){
        console.log("Question -->> ",currentNode.question)
        console.log("Answer -->> ",currentNode.answer)
        currentNode = currentNode.nextCard
    }
}

function add(L,question,answer){
    const newFlashCard = new FlashCard(question, answer);
    newFlashCard.question = question; 
    newFlashCard.answer = answer; 
    if (L.head === null){
        L.head = newFlashCard ; 
    } else{
        newFlashCard .nextCard = L.head;  
        L.head = newFlashCard ; 
    }
}

function iterateAndLogDecks(decks) {
    decks.forEach(deck => {
        console.log(`Deck: ${deck.title}`);
        showCards(deck.cards);
        console.log("-------------")
    });
}

/*
const deck1 = new Deck("Deck1"); 
const deck2 = new Deck("Deck2"); 

add(deck1.cards,"Quesion?", "Answer"); 
add(deck2.cards,"???","AAA")

const decksArray = [deck1,deck2]; 

iterateAndLogDecks(decksArray); 
*/


export { FlashCard, LinkedList,Deck, showCards, add,iterateAndLogDecks};

/*
Hay q cambiar las otras 
function search(L,element){
    let currentNode = L.head;  
    let position = 0; 
    while (currentNode !== null){
        if (currentNode.value === element){
            return position; 
        }
        currentNode = currentNode.nextNode;  
        position += 1; 
    }
    return null; 
}

function length(L){
    let currentNode = L.head;  
    let size = 0; 
    while (currentNode !== null){
        currentNode = currentNode.nextNode; 
        size += 1;  
    }
    return size; 
}

function insert(L,element,position){
    let currentNode = L.head;  
    let auxPos = 0; 
    const newNode = new Node(); 
    newNode.value = element; 
    if (position === 0){
        add(L,element); 
        return position; 
    } 
    while (currentNode!== null){
        if (auxPos === position-1){
            newNode.nextNode = currentNode.nextNode;  
            currentNode.nextNode = newNode;  
            return position; 
        }
        currentNode = currentNode.nextNode;  
        auxPos += 1; 
    }
    return null
}


function Delete(L,element){
    let position = search(L,element); 
    if (position === null){
        return null; 
    } 

    if (position===0){
        L.head = L.head.nextNode 
        return 0; 
    }

    let auxPos = 0; 
    let currentNode = L.head;
    while (currentNode !== null){
        if (auxPos === position -1){
            currentNode.nextNode = currentNode.nextNode.nextNode; 
            return position; 
        }
        currentNode = currentNode.nextNode;  
        auxPos += 1; 
    }
}

function access(L,position){
    let auxPos = 0; 
    let currentNode = L.head;
    while (currentNode !== null && auxPos < position){
        currentNode = currentNode.nextNode
        auxPos += 1; 
    } 
    if (currentNode === null){
        return null; 
    }
    return currentNode.value; 
}

function update(L,element,position){
    let auxPos = 0; 
    let currentNode = L.head; 
    while (currentNode !== null && auxPos < position){
        currentNode = currentNode.nextNode; 
        auxPos += 1 ;
    }
    if (currentNode === null){
        return null; 
    }
    currentNode.value = element; 
    return position; 
}
*/