const words = [
  // ... words array here
];

// Remaining code:
const gameBoard = document.querySelector('.board');
const toggleSpyModeButton = document.getElementById('toggleSpyMode');
const numCards = 25;
const numBlueCards = 9;
const numRedCards = 9;
const numWhiteCards = 4;
const numBlackCards = 3;

function generateRandomIndices(limit, count) {
  const indices = [];
  while (indices.length < count) {
    const index = Math.floor(Math.random() * limit);
    if (!indices.includes(index)) {
      indices.push(index);
    }
  }
  return indices;
}

function generateCards() {
  const cardIndices = generateRandomIndices(words.length, numCards);
  const blueIndices = generateRandomIndices(numCards, numBlueCards);
  const redIndices = generateRandomIndices(numCards, numRedCards);
  const blackIndices = generateRandomIndices(numCards, numBlackCards);

  const cards = cardIndices.map((wordIndex, i) => {
    const word = words[wordIndex];
    let color = 'white';
    if (blueIndices.includes(i)) {
      color = 'blue';
    } else if (redIndices.includes(i)) {
      color = 'red';
    } else if (blackIndices.includes(i)) {
      color = 'black';
    }
    return { word, color };
  });

  return cards;
}

function renderGameBoard(cards, showColors = false) {
  gameBoard.innerHTML = '';
  cards.forEach((card, i) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.textContent = card.word;
    cardElement.addEventListener('click', () => {
      if (!cardElement.classList.contains('revealed')) {
        cardElement.classList.add('revealed');
        cardElement.classList.add(card.color);
      }
    });

    if (showColors) {
      cardElement.classList.add('revealed');
      cardElement.classList.add(card.color);
    }

    gameBoard.appendChild(cardElement);
  });
}

let cards = generateCards();
let spyModeEnabled = false;

renderGameBoard(cards);

toggleSpyModeButton.addEventListener('click', () => {
  spyModeEnabled = !spyModeEnabled;
  renderGameBoard(cards, spyModeEnabled);
});

function newGame() {
  cards = generateCards();
  spyModeEnabled = false;
  renderGameBoard(cards);
}

function toggleSpyMode() {
  spyModeEnabled = !spyModeEnabled;
  renderGameBoard(cards, spyModeEnabled);
}
