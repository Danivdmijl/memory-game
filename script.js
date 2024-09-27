const themes = {
    letters: [
        { name: 'A', id: 1 }, { name: 'A', id: 2 },
        { name: 'B', id: 3 }, { name: 'B', id: 4 },
        { name: 'C', id: 5 }, { name: 'C', id: 6 },
        { name: 'D', id: 7 }, { name: 'D', id: 8 },
        { name: 'E', id: 9 }, { name: 'E', id: 10 },
        { name: 'F', id: 11 }, { name: 'F', id: 12 },
        { name: 'G', id: 13 }, { name: 'G', id: 14 },
        { name: 'H', id: 15 }, { name: 'H', id: 16 }
    ],
    animals: [
        { name: '🐶', id: 1 }, { name: '🐶', id: 2 },
        { name: '🐱', id: 3 }, { name: '🐱', id: 4 },
        { name: '🐰', id: 5 }, { name: '🐰', id: 6 },
        { name: '🦊', id: 7 }, { name: '🦊', id: 8 },
        { name: '🐻', id: 9 }, { name: '🐻', id: 10 },
        { name: '🐼', id: 11 }, { name: '🐼', id: 12 },
        { name: '🦁', id: 13 }, { name: '🦁', id: 14 },
        { name: '🐸', id: 15 }, { name: '🐸', id: 16 }
    ],
    fruits: [
        { name: '🍎', id: 1 }, { name: '🍎', id: 2 },
        { name: '🍌', id: 3 }, { name: '🍌', id: 4 },
        { name: '🍇', id: 5 }, { name: '🍇', id: 6 },
        { name: '🍉', id: 7 }, { name: '🍉', id: 8 },
        { name: '🍓', id: 9 }, { name: '🍓', id: 10 },
        { name: '🍍', id: 11 }, { name: '🍍', id: 12 },
        { name: '🥝', id: 13 }, { name: '🥝', id: 14 },
        { name: '🍒', id: 15 }, { name: '🍒', id: 16 }
    ],

    spaceobjects: [
        { name: '🚀', id: 1 }, { name: '🚀', id: 2 },
        { name: '🛸', id: 3 }, { name: '🛸', id: 4 },
        { name: '🌕', id: 5 }, { name: '🌕', id: 6 },
        { name: '🪐', id: 7 }, { name: '🪐', id: 8 },
        { name: '🌍', id: 9 }, { name: '🌍', id: 10 },
        { name: '☄️', id: 11 }, { name: '☄️', id: 12 },
        { name: '🌟', id: 13 }, { name: '🌟', id: 14 },
        { name: '👽', id: 15 }, { name: '👽', id: 16 }
    ],
    sport: [
        { name: '🏀', id: 1 }, { name: '🏀', id: 2 },
        { name: '⚽', id: 3 }, { name: '⚽', id: 4 },
        { name: '🏈', id: 5 }, { name: '🏈', id: 6 },
        { name: '🎾', id: 7 }, { name: '🎾', id: 8 },
        { name: '🏐', id: 9 }, { name: '🏐', id: 10 },
        { name: '🏓', id: 11 }, { name: '🏓', id: 12 },
        { name: '🎳', id: 13 }, { name: '🎳', id: 14 },
        { name: '🏒', id: 15 }, { name: '🏒', id: 16 }
    ],
    instruments: [
        { name: '🎸', id: 1 }, { name: '🎸', id: 2 },
        { name: '🎹', id: 3 }, { name: '🎹', id: 4 },
        { name: '🥁', id: 5 }, { name: '🥁', id: 6 },
        { name: '🎷', id: 7 }, { name: '🎷', id: 8 },
        { name: '🎻', id: 9 }, { name: '🎻', id: 10 },
        { name: '🎺', id: 11 }, { name: '🎺', id: 12 },
        { name: '🪕', id: 13 }, { name: '🪕', id: 14 },
        { name: '🎤', id: 15 }, { name: '🎤', id: 16 }
    ]
};

function getSelectedTheme() {
    const themeSelector = document.getElementById('theme-selector');
    return themeSelector.value;
}

function getCardArrayForTheme() {
    const selectedTheme = getSelectedTheme();
    return themes[selectedTheme];
}

function shuffleCards() {
    const cardArray = getCardArrayForTheme();
    shuffledCards = [...cardArray].sort(() => 0.5 - Math.random());
}

const gameContainer = document.querySelector('.game-container');
const timerElement = document.getElementById('timer');
const gameMessage = document.getElementById('game-message');
const gameResult = document.getElementById('game-result');
const highscoreList = document.getElementById('highscore-list');

let timeLeft = 40000;
let timerStarted = false;
let timerInterval;
let startTime;

let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
renderHighScores();

let flippedCards = [];
let matchedPairs = 0;
let lockBoard = false;

function createBoard() {
    gameContainer.innerHTML = '';
    shuffleCards();
    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-name', card.name);
        
        const frontFace = document.createElement('div');
        frontFace.classList.add('front');
        frontFace.textContent = card.name;

        const backFace = document.createElement('div');
        backFace.classList.add('back');
        backFace.textContent = '?';

        cardElement.appendChild(frontFace);
        cardElement.appendChild(backFace);

        gameContainer.appendChild(cardElement);

        cardElement.addEventListener('click', flipCard);
    });
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        timeLeft = 40000 - elapsedTime;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "Time: 00:00:000";
            gameOver();
        } else {
            updateTimerDisplay();
        }
    }, 100);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    const milliseconds = timeLeft % 1000;
    timerElement.textContent = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds}`;
}

let musicStarted = false;


function flipCard(e) {
    if (lockBoard) return;

    const clickedCard = e.target.parentElement;

    // Start the background music immediately when the first card is clicked
    if (!musicStarted) {
        startBackgroundMusic();
        musicStarted = true;
    }

    // Start the timer when the first card is clicked
    if (!timerStarted) {
        timerStarted = true;
        startTimer();
    }

    if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('match')) return;

    clickedCard.classList.add('flipped');

    // Play flip sound
    const flipSound = document.getElementById('flip-sound');
    flipSound.play();

    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}


function checkForMatch() {
    lockBoard = true;

    const [card1, card2] = flippedCards;

    // Wait for the second card to finish flipping before checking for a match
    card2.addEventListener('transitionend', () => {
        if (card1.dataset.name === card2.dataset.name) {
            // If the cards match
            card1.classList.add('match');
            card2.classList.add('match');
            matchedPairs++;

            // Play match sound
            const matchSound = document.getElementById('match-sound');
            matchSound.play();

            if (matchedPairs === 8) {
                clearInterval(timerInterval);
                showWinMessage();
            }

            flippedCards = [];
            lockBoard = false;
        } else {
            // If the cards don't match, first apply the shake animation
            card1.classList.add('shake');
            card2.classList.add('shake');

            // After the shake animation, remove both shake and flipped classes
            setTimeout(() => {
                card1.classList.remove('shake');
                card2.classList.remove('shake');

                // Now flip the cards back after shaking
                setTimeout(() => {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    flippedCards = [];
                    lockBoard = false;
                }, 600); // 600ms is the duration of the flip back animation
            }, 500); // 500ms for the shake animation
        }
    }, { once: true });
}

function showWinMessage() {
    const elapsedTime = (Date.now() - startTime) / 1000;
    gameMessage.style.display = 'block';
    gameResult.textContent = `Congratulations! You finished in ${elapsedTime.toFixed(3)} seconds!`;

    // Play win sound
    const winSound = document.getElementById('win-sound');
    winSound.play();

    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.classList.add('winner');  // Ensure the 'winner' class is added
    });

    saveHighScore(elapsedTime);
}

function gameOver() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.classList.add('lost');
    });

    // Play lose sound
    const loseSound = document.getElementById('lose-sound');
    loseSound.play();

    gameMessage.style.display = 'block';
    gameResult.textContent = "Game Over! Time's Up!";
    lockBoard = true;
}

function renderHighScores() {
    highscoreList.innerHTML = '';
    highScores.forEach((score, index) => {
        const li = document.createElement('li');
        li.textContent = `${score.toFixed(3)} seconds`;
        if (index === 0) {
            li.classList.add('gold');
        } else if (index === 1) {
            li.classList.add('silver');
        } else if (index === 2) {
            li.classList.add('bronze');
        }
        highscoreList.appendChild(li);
    });
}

function restartGame() {
    clearInterval(timerInterval);
    gameMessage.style.display = 'none';
    timeLeft = 40000;
    matchedPairs = 0;
    flippedCards = [];
    lockBoard = false;
    timerStarted = false;
    musicStarted = false;  // Reset music flag

    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.pause();  // Stop the current music
    backgroundMusic.currentTime = 0;  // Reset music to the beginning

    updateTimerDisplay();
    createBoard();
}




function resetHighScores() {
    if (confirm("Are you sure you want to reset the high scores?")) {
        highScores = [];
        localStorage.removeItem('highScores');
        renderHighScores();
    }
}


function startBackgroundMusic() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.5;  // Set volume (optional)
    backgroundMusic.play();        // Play background music
}


function toggleMusic() {
    const backgroundMusic = document.getElementById('background-music');
    const musicToggleButton = document.getElementById('music-toggle-btn');

    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggleButton.textContent = "Mute Music";  // Update button text
    } else {
        backgroundMusic.pause();
        musicToggleButton.textContent = "Play Music";  // Update button text
    }
}


createBoard();
