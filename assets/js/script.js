const gameNode = document.querySelector("#game-board"); /*get game board */
const victoryText = document.querySelector("#victory-message"); /*get element winning message */
const startGameButton = document.querySelector("#new-game-button"); /*get new game button*/
const visibleCardClassname = 'visible';/*get visible class name */
const cardFlipTimeoutMs = 500; /*get time during which the card turns */

const cardElements = ['black','catdog','eat','fish','granny','tv']; /*elements that behind cards*/

const cardAmount = 12; /*amount of cards*/

let visibleCards = []; /*cards that have already been opened */

function startGame() {} /*for starting new game */

function generateArray() {} /*for mixing cards in a new game*/

function renderCard() {} /*pick one card*/

function handleCardClick() {} /*click on a card */

startGame();