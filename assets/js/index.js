document.addEventListener("DOMContentLoaded", setupGame);

const imagePaths = [
  "assets/images/card1.png",
  "assets/images/card2.png",
  "assets/images/card3.png",
  "assets/images/card4.png",
  "assets/images/card5.png",
  "assets/images/card6.png",
  "assets/images/card7.png",
  "assets/images/card8.png",
  "assets/images/card9.png",
  "assets/images/card10.png",
];

let shuffledIcons = [...imagePaths, ...imagePaths];


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let flippedCards = [];
let lockBoard = false;

function setupGame() {
  const cards = document.querySelectorAll(".card");


  shuffle(shuffledIcons);

  cards.forEach((card, index) => {
    card.dataset.image = shuffledIcons[index];
    card.addEventListener("click", flipCard);
  });
}

function flipCard() {
    if (lockBoard || this.classList.contains("matched") || flippedCards.includes(this)) {
        return; // Prevent flipping more than two cards or flipping matched ones
    }

    this.classList.add("flip");
    this.style.backgroundImage = `url(${this.dataset.image})`;
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    lockBoard = true; // Lock the board to prevent clicking more cards

    let [card1, card2] = flippedCards;
    if (card1.dataset.image === card2.dataset.image) {
        // 🎉 Cards match!
        card1.classList.add("matched");
        card2.classList.add("matched");
        resetBoard();
    } else {
        //  Cards don't match, flip them back after 1 second
        setTimeout(() => {
            card1.classList.remove("flip");
            card2.classList.remove("flip");
            card1.style.backgroundImage = "";
            card2.style.backgroundImage = "";
            resetBoard();
        }, 1000);
    }
}

// 🔄 Reset flipped cards array & unlock board
function resetBoard() {
    flippedCards = [];
    lockBoard = false;
}

// Start the game
setupGame();


