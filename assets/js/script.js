const gameNode = document.querySelector("#game-board"); /*get game board */
const victoryText = document.querySelector("#victory-message"); /*get element winning message */
const startGameButton = document.querySelector("#new-game-button"); /*get new game button*/

const visibleCardClassname = 'visible';/*get visible class name */

const cardFlipTimeoutMs = 500; /*get time during which the card turns */

const cardElements = ['black.jpg','catdog.jpg','eat.jpg','fish.jpg','granny.jpg','tv.jpg']; /*elements that behind cards*/

const cardAmount = 12; /*amount of cards*/

let visibleCards = []; /*cards that have already been opened */
let flippedCards = []; /*cards currently flipped */
startGameButton.addEventListener("click", startGame); /*new game when push on button*/

function startGame() {
    [gameNode, victoryText].forEach(node => node.innerHTML = ""); /*clean our board and vinning message when new game begins */
       visibleCards = []; /* Reset visible cards */
    flippedCards = []; /* Reset flipped cards */
    const cardValues = generateArray(cardElements, cardAmount); /*12 cards*/
    console.log(cardValues);
    
    cardValues.forEach(renderCard);
} /*for starting new game */

function generateArray(imageFilenames, cardAmount) {
    const randomArray = []; /*array. put here our generated elements- cards */
    const elementCounts = {}; /*object. count how much times every element meets */

    for (const imageFilename of imageFilenames) {
        elementCounts[imageFilename] = 0; /* */
    }
    console.log(elementCounts);

    while (randomArray.length < cardAmount) {
        const randomIndex = Math.floor(Math.random() * imageFilenames.length);
        const randomElement = imageFilenames[randomIndex];

        if (elementCounts[randomElement] < 2) { /* each card can appear only twice */
            randomArray.push(randomElement);
            elementCounts[randomElement]++;
        }
    }

    return randomArray;
    /*generation of cards(array of 12 elements)*/ 
} /*for mixing cards in a new game. */

function renderCard(imageFilename) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
  
    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");

    cardFront.textContent = "?";

    /*attach images to cards*/ 
    const image =  document.createElement("img");
    image.src = `assets/images/${imageFilename}`;
    image.classList.add("card-image");
    
    cardBack.appendChild(image);

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    card.appendChild(cardInner);

    card.addEventListener("click", () => {
        handleCardClick(card, imageFilename);
    });
    gameNode.appendChild(card);
} /*pick one card*/

function handleCardClick(card, imageFilename) {
    // Prevent clicking on an already flipped or matched card
    if (card.classList.contains(visibleCardClassname) || flippedCards.some(f => f.card === card)) {
        return;
    }

    card.classList.add(visibleCardClassname);
    flippedCards.push({ card, imageFilename });
    /* If two cards are flipped */
    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        /* Check if the two flipped cards match */
        if (firstCard.imageFilename === secondCard.imageFilename) {
            visibleCards.push(firstCard.card, secondCard.card);
            flippedCards = []; /* Reset flipped cards */
            /* Check if all cards are matched */
            if (visibleCards.length === cardAmount) {
                victoryText.textContent = "Congratulations! You won!";
            }
        } else {
            /* Flip the cards back if they don't match after a short delay */
            setTimeout(() => {
                firstCard.card.classList.remove(visibleCardClassname);
                secondCard.card.classList.remove(visibleCardClassname);
                flippedCards = []; /* Reset flipped cards */
            }, cardFlipTimeoutMs);
        }
    }
}


startGame();