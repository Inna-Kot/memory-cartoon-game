const gameNode = document.querySelector("#game-board"); /*get game board */
const victoryText = document.querySelector("#victory-message"); /*get element winning message */
const startGameButton = document.querySelector("#new-game-button"); /*get new game button*/

const visibleCardClassname = 'visible';/*get visible class name */

const cardFlipTimeoutMs = 500; /*get time during which the card turns */

const cardElements = ['black.jpg','catdog.jpg','eat.jpg','fish.jpg','granny.jpg','tv.jpg']; /*elements that behind cards*/

const cardAmount = 12; /*amount of cards*/

let visibleCards = []; /*cards that have already been opened */

startGameButton.addEventListener("click", startGame); /*new game when push on button*/

function startGame() {
    [gameNode, victoryText].forEach(node => node.innerHTML = ""); /*clean our board and vinning message when new game begins */
   
    const cardValues = generateArray(cardElements,cardAmount);/*12 cards*/
    
    cardValues.forEach(renderCard);


} /*for starting new game */


function generateArray(imageFilenames, cardAmount) {
    const randomArray = []; /*array. put here our generated elements- cards */
    const elementCounts = {}; /*object. count how much times every element meets */

    for (const imageFilename of imageFilenames) {
        elementCounts[imageFilename] = 0; /* */
    }

    while (randomArray.length < cardAmount) {
        const randomIndex = Math.floor(Math.random() * imageFilenames.length);
        const randomElement = imageFilenames[randomIndex];

        if (elementCounts[randomElement] < 2) {
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
       handleCardClick(card);
    });

    gameNode.appendChild(card);

} /*pick one card*/

function handleCardClick(card) {
    card.classList.add(visibleCardClassname);
} /*click on a card */

startGame();