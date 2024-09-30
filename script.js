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

let secretUnlocked = false;
let swipeSequence = [];
let tapCount = 0;

let startX, startY, endX, endY;


const customCode = [68, 88, 68, 84, 72, 51, 66, 69, 83, 84];
let customCodeIndex = 0;

function checkIfSecretThemeUnlocked() {
    const resetThemesBtn = document.getElementById('reset-themes-btn');

    if (localStorage.getItem('secretThemeUnlocked') === 'true') {
        unlockSecretInMenu();
        resetThemesBtn.style.display = 'block';
    } else {
        resetThemesBtn.style.display = 'none';
    }
}

function checkCustomCode(e) {
    if (e.keyCode === customCode[customCodeIndex]) {
        customCodeIndex++;
        if (customCodeIndex === customCode.length) {
            unlockSecretTheme();
            customCodeIndex = 0; 
        }
    } else {
        customCodeIndex = 0; 
    }
}

window.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});

window.addEventListener('touchend', function (event) {
    endX = event.changedTouches[0].clientX;
    endY = event.changedTouches[0].clientY;

    const deltaX = endX - startX;
    const deltaY = endY - startY;

    if (Math.abs(deltaY) > Math.abs(deltaX)) {
        if (deltaY < 0) {
            // Swipe up
            swipeSequence.push('up');
        } else {
            // Swipe down
            swipeSequence.push('down');
        }
    }

    checkUnlockSequence();
});

document.addEventListener('click', function () {
    tapCount++;
    checkUnlockSequence();
});

function checkUnlockSequence() {
    if (
        swipeSequence.join('') === 'upupdowndown' &&
        tapCount === 5
    ) {
        unlockSecretTheme();
        resetUnlockInputs(); // Reset input sequence after unlocking
    }
}

function resetUnlockInputs() {
    swipeSequence = [];
    tapCount = 0;
}



function unlockSecretTheme() {
    if (!secretUnlocked) {
        alert("🎉 You’ve unlocked the Secret Theme! 🎉");

        const unlockSound = new Audio('sounds/unlocked.wav');
        unlockSound.play();

        bigUnlockEffect();

        localStorage.setItem('secretThemeUnlocked', 'true');

        unlockSecretInMenu();

        document.getElementById('reset-themes-btn').style.display = 'block';

        secretUnlocked = true;
    }
}

function unlockSecretInMenu() {
    const themeSelector = document.getElementById('theme-selector');

    if (!document.querySelector('option[value="secret"]')) {
        const secretOption = document.createElement('option');
        secretOption.value = 'secret';
        secretOption.textContent = 'Secret theme: Mario';
        themeSelector.appendChild(secretOption);

        themes.secret = [
            { name: '🦄', id: 1, img: 'images/bowser.png' },
            { name: '🦄', id: 2, img: 'images/bowser.png' },
            { name: '✨', id: 3, img: 'images/bowserjr.png' },
            { name: '✨', id: 4, img: 'images/bowserjr.png' },
            { name: '🌈', id: 5, img: 'images/mario.png' },
            { name: '🌈', id: 6, img: 'images/mario.png' },
            { name: '🌟', id: 7, img: 'images/vliegluigitoad.png' },
            { name: '🌟', id: 8, img: 'images/vliegluigitoad.png' },,
            { name: '💫', id: 9, img: 'images/vuurmario.png' },
            { name: '💫', id: 10, img: 'images/vuurmario.png' },
            { name: '🌀', id: 11, img: 'images/wario.png' },
            { name: '🌀', id: 12, img: 'images/wario.png' },
            { name: '🎇', id: 13, img: 'images/wiggler.png' },
            { name: '🎇', id: 14, img: 'images/wiggler.png' },
            { name: '🌙', id: 15, img: 'images/wolkguy.png' },
            { name: '🌙', id: 16, img: 'images/wolkguy.png' },
        ];
        
    }
}

function bigUnlockEffect() {
    // Start playing the unlock sound at the same time the yellow background is applied
    const unlockSound = new Audio('sounds/unlocked.wav');
    unlockSound.play(); // Play the sound immediately
    
    document.body.classList.add('shake');
    document.body.style.backgroundColor = '#ffcc00'; // Yellow effect

    setTimeout(() => {
        document.body.classList.remove('shake');
        document.body.style.backgroundColor = ''; 
    }, 1000);

    createGlowingParticles();
}


// Create glowing particles that float upwards
function createGlowingParticles() {
    const numParticles = 50;
    const container = document.createElement('div');
    container.classList.add('particle-container');
    document.body.appendChild(container);

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('glowing-particle');
        container.appendChild(particle);

        const randomX = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 2;
        particle.style.left = `${randomX}px`;
        particle.style.animationDelay = `${randomDelay}s`;

        setTimeout(() => {
            particle.remove();
        }, 5000); // Particles will exist for 5 seconds
    }

    setTimeout(() => {
        container.remove();
    }, 6000); // Container stays for a bit longer
}

// Reset all unlocked themes by clearing localStorage and refreshing the theme selector
function resetThemes() {
    if (confirm("Are you sure you want to reset unlocked themes?")) {
        // Remove the unlocked theme status from localStorage
        localStorage.removeItem('secretThemeUnlocked');

        // Remove the secret theme from the theme selector
        const secretOption = document.querySelector('option[value="secret"]');
        if (secretOption) secretOption.remove();

        // Hide the "Reset Themes" button after resetting themes
        document.getElementById('reset-themes-btn').style.display = 'none';

        // Reset the secretUnlocked flag so that the theme can be unlocked again
        secretUnlocked = false; // Reset the in-memory flag

        alert("All secret themes have been reset.");
    }
}


checkIfSecretThemeUnlocked();

document.addEventListener('keydown', checkCustomCode);




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
    const selectedTheme = getSelectedTheme(); // Get the current theme
    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-name', card.name);
        
        const frontFace = document.createElement('div');
        frontFace.classList.add('front');

        // Check if the current theme is 'secret'
        if (selectedTheme === 'secret') {
            // Render an image for the secret theme
            const imgElement = document.createElement('img');
            imgElement.src = card.img; // Use the 'img' path from the theme
            imgElement.alt = card.name;
            imgElement.classList.add('card-image'); // Add a class for styling
            frontFace.appendChild(imgElement);
        } else {
            // Render text content (emoji) for other themes
            frontFace.textContent = card.name;
        }

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

    // Stop background music
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset the music to the beginning

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

    saveHighScore(elapsedTime);  // Save the time after the game ends
}

function gameOver() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.classList.add('lost');
    });

    // Stop background music
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset the music to the beginning

    // Play lose sound
    const loseSound = document.getElementById('lose-sound');
    loseSound.play();

    gameMessage.style.display = 'block';
    gameResult.textContent = "Game Over! Time's Up!";
    lockBoard = true;
}

// Fix: Saving high score
function saveHighScore(elapsedTime) {
    // Parse the current high scores from localStorage (if they exist)
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Add the new elapsed time to the list of scores
    highScores.push(elapsedTime);

    // Sort the scores from fastest to slowest and keep only the top 3
    highScores.sort((a, b) => a - b);
    highScores = highScores.slice(0, 3);  // Keep only the top 3 scores

    // Save the updated high scores back to localStorage
    localStorage.setItem('highScores', JSON.stringify(highScores));

    // Re-render the high score list to update the UI
    renderHighScores();
}

// Fix: Rendering high scores
function renderHighScores() {
    // Get the high scores from localStorage
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Clear the current high score list display
    highscoreList.innerHTML = '';

    // Loop through each score and display it in the list
    highScores.forEach((score, index) => {
        const li = document.createElement('li');
        li.textContent = `${score.toFixed(3)} seconds`;

        // Apply classes for first, second, and third places
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
        musicToggleButton.textContent = "Mute Music"; 
    } else {
        backgroundMusic.pause();
        musicToggleButton.textContent = "Play Music";  
    }
}

createBoard();