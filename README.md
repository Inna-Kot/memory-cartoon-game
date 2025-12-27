![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Memory Cartoon Game

![Responsive Game Screenshot](screenshots/responsive-Game.png)


## Project Overview

Memory Cartoon Game is a browser-based card matching game built with HTML, CSS, and JavaScript. The goal of the game is to find all matching pairs of cards by flipping two cards at a time.

This project was created as **Portfolio Project 2 (JavaScript Essentials)** for the **Code Institute Diploma in Full Stack Software Development**.

---

## User Experience (UX)

### User Goals

- Play a simple and fun memory game
- Receive immediate visual feedback when cards are flipped
- Clearly see when the game is completed

### Site Owner Goals

- Demonstrate understanding of JavaScript fundamentals
- Implement game logic with DOM manipulation
- Handle user interaction and edge cases correctly

---

## Game Rules

- Click on a card to flip it
- Flip two cards at a time
- If the cards match, they remain visible
- If the cards do not match, they flip back after a short delay
- The game ends when all pairs are matched

---

## Features

### Existing Features

- Card flip animation
- Randomized card positions on each new game
- Match detection logic
- Victory message when all pairs are found
- New Game button to restart the game
- Responsive layout for different screen sizes

### Future Features

- Move counter
- Timer
- Difficulty levels

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Google Fonts
- Git & GitHub

---

## Testing

### Manual Testing

- Verified that cards flip on click
- Verified that matched cards remain visible
- Verified that unmatched cards flip back after delay
- Verified that rapid clicking does not break game logic
- Verified that New Game resets the board correctly

---

## Bugs and Fixes

### Bug 1: Cards remained open when clicked rapidly

**Issue:**  
When clicking cards very quickly, some cards stayed visible and did not flip back.

**Cause:**  
The game allowed additional clicks while two cards were already flipped and waiting to be evaluated.

**Fix:**  
Implemented a `lockBoard` flag to temporarily disable clicking while two cards are being compared.

### Bug 2: Multiple cards could be flipped at the same time

**Issue:**  
More than two cards could be flipped before the timeout finished.

**Fix:**  
Locked the board immediately when the second card is flipped and unlocked it only after match evaluation.

---

## Deployment

The project was deployed using **GitHub Pages**.
- Repository: https://github.com/Inna-Kot/memory-cartoon-game
- Live site: https://inna-kot.github.io/memory-cartoon-game/

### Deployment Steps

1. Go to the project repository on GitHub
2. Open **Settings**
3. Navigate to **Pages**
4. Select the `main` branch
5. Save and wait for the deployment link

---

## Local Development

To run the project locally:

1. Clone the repository
2. Open the project folder in VS Code
3. Open `index.html` using Live Server or a browser

---

## Credits

### Content

- Game logic inspired by classic memory card games

### Media

- Card and background images from **https://www.vector4free.com/**

### Fonts

- Google Fonts: Nerko One

---

## Acknowledgements

- Code Institute course material
- Mentor support
- Student community on Slack
