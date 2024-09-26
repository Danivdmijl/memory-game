const cardArray = [
    { name: 'A', id: 1 }, { name: 'A', id: 2 },
    { name: 'B', id: 3 }, { name: 'B', id: 4 },
    { name: 'C', id: 5 }, { name: 'C', id: 6 },
    { name: 'D', id: 7 }, { name: 'D', id: 8 },
    { name: 'E', id: 9 }, { name: 'E', id: 10 },
    { name: 'F', id: 11 }, { name: 'F', id: 12 },
    { name: 'G', id: 13 }, { name: 'G', id: 14 },
    { name: 'H', id: 15 }, { name: 'H', id: 16 }
];

let shuffledCards = [...cardArray];
function shuffleCards() {
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

function flipCard(e) {
    if (lockBoard) return;

    const clickedCard = e.target.parentElement;

    if (!timerStarted) {
        timerStarted = true;
        startTimer();
    }

    if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('match')) return;

    clickedCard.classList.add('flipped');

    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
        checkForMatch();
    }
}

function checkForMatch() {
    lockBoard = true;

    const [card1, card2] = flippedCards;

    if (card1.dataset.name === card2.dataset.name) {
        card1.classList.add('match');
        card2.classList.add('match');
        matchedPairs++;

        if (matchedPairs === 8) {
            clearInterval(timerInterval);
            showWinMessage();
        }

        flippedCards = [];
        lockBoard = false;
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            lockBoard = false;
        }, 1000);
    }
}

function showWinMessage() {
    const elapsedTime = (Date.now() - startTime) / 1000;
    gameMessage.style.display = 'block';
    gameResult.textContent = `Congratulations! You finished in ${elapsedTime.toFixed(3)} seconds!`;

    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.classList.add('winner');
    });

    saveHighScore(elapsedTime);
}

function gameOver() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.classList.add('lost');
    });

    gameMessage.style.display = 'block';
    gameResult.textContent = "Game Over! Time's Up!";
    lockBoard = true;
}

function saveHighScore(score) {
    highScores.push(score);
    highScores.sort((a, b) => a - b);
    highScores = highScores.slice(0, 3);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    renderHighScores();
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

createBoard();
