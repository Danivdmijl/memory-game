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
    ],

    eredivisie: [
        { name: '🏆', id: 1, img: 'images/ajax.png' },
        { name: '🏆', id: 2, img: 'images/ajax.png' },
        { name: '⚽', id: 3, img: 'images/pec.png' },
        { name: '⚽', id: 4, img: 'images/pec.png' },
        { name: '🥅', id: 5, img: 'images/psv.png' },
        { name: '🥅', id: 6, img: 'images/psv.png' },
        { name: '🏟️', id: 7, img: 'images/utrecht.png' },
        { name: '🏟️', id: 8, img: 'images/utrecht.png' },
        { name: '🎽', id: 9, img: 'images/az.png' },
        { name: '🎽', id: 10, img: 'images/az.png' },
        { name: '🧤', id: 11, img: 'images/nec.png' },
        { name: '🧤', id: 12, img: 'images/nec.png' },
        { name: '🎯', id: 13, img: 'images/heerenveen.png' },
        { name: '🎯', id: 14, img: 'images/heerenveen.png' },
        { name: '🎧', id: 15, img: 'images/twente.png' },
        { name: '🎧', id: 16, img: 'images/twente.png' }
    ],

    secret: [
        { name: '🦄', id: 1, img: 'images/bowser.png' },
        { name: '🦄', id: 2, img: 'images/bowser.png' },
        { name: '✨', id: 3, img: 'images/bowserjr.png' },
        { name: '✨', id: 4, img: 'images/bowserjr.png' },
        { name: '🌈', id: 5, img: 'images/mario.png' },
        { name: '🌈', id: 6, img: 'images/mario.png' },
        { name: '🌟', id: 7, img: 'images/vliegluigitoad.png' },
        { name: '🌟', id: 8, img: 'images/vliegluigitoad.png' },
        { name: '💫', id: 9, img: 'images/vuurmario.png' },
        { name: '💫', id: 10, img: 'images/vuurmario.png' },
        { name: '🌀', id: 11, img: 'images/wario.png' },
        { name: '🌀', id: 12, img: 'images/wario.png' },
        { name: '🎇', id: 13, img: 'images/wiggler.png' },
        { name: '🎇', id: 14, img: 'images/wiggler.png' },
        { name: '🌙', id: 15, img: 'images/wolkguy.png' },
        { name: '🌙', id: 16, img: 'images/wolkguy.png' },
    ],
    pokemon: [
        { name: '⚡', id: 1, img: 'images/pikachu.png' },
        { name: '⚡', id: 2, img: 'images/pikachu.png' },
        { name: '🔥', id: 3, img: 'images/charizard.png' },
        { name: '🔥', id: 4, img: 'images/charizard.png' },
        { name: '💧', id: 5, img: 'images/squirtle.png' },
        { name: '💧', id: 6, img: 'images/squirtle.png' },
        { name: '🌱', id: 7, img: 'images/bulbasaur.png' },
        { name: '🌱', id: 8, img: 'images/bulbasaur.png' },
        { name: '💫', id: 9, img: 'images/mewtwo.png' },
        { name: '💫', id: 10, img: 'images/mewtwo.png' },
        { name: '🌀', id: 11, img: 'images/gengar.png' },
        { name: '🌀', id: 12, img: 'images/gengar.png' },
        { name: '🎇', id: 13, img: 'images/jigglypuff.png' },
        { name: '🎇', id: 14, img: 'images/jigglypuff.png' },
        { name: '🌕', id: 15, img: 'images/snorlax.png' },
        { name: '🌕', id: 16, img: 'images/snorlax.png' },
    ]
};

// JSONBin API settings for the global leaderboard
const binId = "66fd21c8acd3cb34a88fe960";  // Replace with your actual bin ID from JSONBin
const apiKey = "$2a$10$Kpj7AvOoKVBhH6nhSgO7z.EUCFLkZ8QTVvNkXH9ittAHNBwWI2IIG";  // Replace with your actual API Key
const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;


function getSelectedTheme() {
    return localStorage.getItem('selectedTheme') || 'animals';
}

function getDeviceType() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Check if the device is a mobile device
    if (/android/i.test(userAgent)) {
        return 'mobile';
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'mobile';
    }
    return 'desktop';
}


async function fetchGlobalLeaderboard() {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "X-Master-Key": apiKey
            }
        });
        const data = await response.json();
        const leaderboard = data.record.leaderboard;

        // Sort the leaderboard by time (ascending)
        leaderboard.sort((a, b) => a.time - b.time);

        // Filter by device type, defaulting to 'desktop' for old entries
        const mobileScores = leaderboard.filter(entry => entry.deviceType === 'mobile');
        const desktopScores = leaderboard.filter(entry => entry.deviceType === 'desktop' || !entry.deviceType);  // Default to desktop if deviceType is missing

        // Populate the global leaderboard in the HTML for both device types
        const mobileLeaderboardList = document.getElementById('global-mobile-leaderboard-list');
        const desktopLeaderboardList = document.getElementById('global-desktop-leaderboard-list');

        mobileLeaderboardList.innerHTML = '';  // Clear the existing mobile list
        desktopLeaderboardList.innerHTML = '';  // Clear the existing desktop list

        // Show top 3 mobile scores
        mobileScores.slice(0, 3).forEach((entry, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${entry.playerName} - ${entry.time.toFixed(2)}s (Theme: ${entry.theme})`;

            // Apply the appropriate class for the top 3
            if (index === 0) {
                listItem.classList.add('gold');  // First place (Gold)
            } else if (index === 1) {
                listItem.classList.add('silver');  // Second place (Silver)
            } else if (index === 2) {
                listItem.classList.add('bronze');  // Third place (Bronze)
            }

            mobileLeaderboardList.appendChild(listItem);
        });

        // Show top 3 desktop scores, including old entries without a deviceType
        desktopScores.slice(0, 3).forEach((entry, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${entry.playerName} - ${entry.time.toFixed(2)}s (Theme: ${entry.theme})`;

            // Apply the appropriate class for the top 3
            if (index === 0) {
                listItem.classList.add('gold');  // First place (Gold)
            } else if (index === 1) {
                listItem.classList.add('silver');  // Second place (Silver)
            } else if (index === 2) {
                listItem.classList.add('bronze');  // Third place (Bronze)
            }

            desktopLeaderboardList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching global leaderboard:', error);
    }
}





async function addNewGlobalScore(playerName, time) {
    try {
        const deviceType = getDeviceType(); // Get the device type
        const selectedTheme = getSelectedTheme(); // Existing function for theme
        
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "X-Master-Key": apiKey
            }
        });
        const data = await response.json();
        const leaderboard = data.record.leaderboard;
        
        // Add the new score with device type
        leaderboard.push({ playerName, time, theme: selectedTheme, deviceType });
        
        // Send the updated leaderboard back to JSONBin (or your backend)
        await fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": apiKey
            },
            body: JSON.stringify({ leaderboard })
        });
        
        // Fetch and display the updated leaderboard
        fetchGlobalLeaderboard();
    } catch (error) {
        console.error('Error adding new score to global leaderboard:', error);
    }
}




// Call fetchGlobalLeaderboard when the page loads to display the leaderboard
fetchGlobalLeaderboard();

// Example: Adding a new global score after the player finishes the game
function onGameFinish(playerName, time) {
    addNewGlobalScore(playerName, time);  // Update the global leaderboard
}

// Function to clean up the leaderboard by removing long usernames
async function cleanUpLeaderboard() {
    try {
        // Fetch the current global leaderboard from JSONBin
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "X-Master-Key": apiKey
            }
        });
        const data = await response.json();
        const leaderboard = data.record.leaderboard;

        // Filter out entries with usernames longer than 13 characters
        const filteredLeaderboard = leaderboard.filter(entry => entry.playerName.length <= 13);

        // Send the cleaned leaderboard back to JSONBin
        await fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": apiKey
            },
            body: JSON.stringify({ leaderboard: filteredLeaderboard })
        });

        console.log('Leaderboard cleaned. Long usernames removed.');
    } catch (error) {
        console.error('Error cleaning leaderboard:', error);
    }
}

// Call this function to clean the leaderboard
cleanUpLeaderboard();



let secretUnlocked = false;
let swipeSequence = [];
let tapCount = 0;

let startX, startY, endX, endY;

const customCode = [68, 88, 68, 84, 72, 51, 66, 69, 83, 84]; // "DXDTH3BEST"
let customCodeIndex = 0;

const pokemonCode = [80, 79, 75, 69, 77, 79, 78]; // "POKEMON"
let pokemonCodeIndex = 0;

function checkIfSecretThemeUnlocked() {
    const resetThemesBtn = document.getElementById('reset-themes-btn');

    if (localStorage.getItem('secretThemeUnlocked') === 'true') {
        unlockSecretInMenu();
        resetThemesBtn.style.display = 'block';
    } else {
        resetThemesBtn.style.display = 'none';
    }

    if (localStorage.getItem('pokemonThemeUnlocked') === 'true') {
        unlockPokemonInMenu();
        resetThemesBtn.style.display = 'block';
    }
}

function unlockEredivisieTheme() {
    if (!localStorage.getItem('eredivisieThemeUnlocked')) {
        alert("Congratulations! You’ve unlocked the Eredivisie Clubs Theme! ⚽");

        const unlockSound = new Audio('sounds/unlocked2.wav');
        unlockSound.play();

        // Add Eredivisie theme option to the theme selector
        const themeSelector = document.getElementById('theme-selector');
        const eredivisieOption = document.createElement('option');
        eredivisieOption.value = 'eredivisie';
        eredivisieOption.textContent = 'Eredivisie Clubs';
        themeSelector.appendChild(eredivisieOption);

        localStorage.setItem('eredivisieThemeUnlocked', 'true');
        document.getElementById('reset-themes-btn').style.display = 'block';
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

function checkPokemonCode(e) {
    if (e.keyCode === pokemonCode[pokemonCodeIndex]) {
        pokemonCodeIndex++;
        if (pokemonCodeIndex === pokemonCode.length) {
            unlockPokemonTheme();
            pokemonCodeIndex = 0; // Reset after unlocking
        }
    } else {
        pokemonCodeIndex = 0; // Reset if wrong key is pressed
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
    // Check for Mario unlock (existing functionality)
    if (swipeSequence.join('') === 'upupdowndown' && tapCount === 5) {
        unlockSecretTheme();
        resetUnlockInputs(); // Reset input sequence after unlocking
    }

    // Check for Pokémon unlock (new functionality)
    if (swipeSequence.join('') === 'updownupdown' && tapCount === 5) {
        unlockPokemonTheme(); // Unlock the Pokémon theme
        resetUnlockInputs(); // Reset the input sequence after unlocking
    }
}

function resetUnlockInputs() {
    swipeSequence = [];
    tapCount = 0;
}



function unlockSecretTheme() {
    if (!secretUnlocked) {
        alert("You’ve unlocked the Secret Mario Theme! 🎉");

        const unlockSound = new Audio('sounds/unlocked2.wav');
        unlockSound.play();

        // Add Mario theme-specific effect with red/green colors
        marioUnlockEffect();

        localStorage.setItem('secretThemeUnlocked', 'true');

        unlockSecretInMenu();

        document.getElementById('reset-themes-btn').style.display = 'block';

        secretUnlocked = true;
    }
}

function marioUnlockEffect() {
    document.body.classList.add('mario-effect'); // Add the new Mario effect class

    // Hide overflow to prevent scrolling
    document.body.style.overflow = 'hidden';

    let flashInterval = setInterval(() => {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'green' ? 'red' : 'green';
    }, 500); // Switch colors every 0.5 seconds

    createGlowingParticles(['#ff0000', '#00ff00']); // Red and Green for Mario and Luigi

    // Stop the effect after 7 seconds
    setTimeout(() => {
        clearInterval(flashInterval);
        document.body.classList.remove('mario-effect');
        document.body.style.backgroundColor = ''; // Reset the background color
        document.body.style.overflow = ''; // Restore overflow
    }, 7000);
}


function unlockPokemonTheme() {
    if (!localStorage.getItem('pokemonThemeUnlocked')) {
        alert("You’ve unlocked the Secret Pokémon Theme! 🎉");

        const unlockSound = new Audio('sounds/unlocked2.wav');
        unlockSound.play();

        pokemonUnlockEffect();

        localStorage.setItem('pokemonThemeUnlocked', 'true');

        unlockPokemonInMenu();

        document.getElementById('reset-themes-btn').style.display = 'block';
    }
}

function pokemonUnlockEffect() {
    document.body.classList.add('pokemon-effect');

    // Hide overflow to prevent scrolling
    document.body.style.overflow = 'hidden';

    let flashInterval = setInterval(() => {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'yellow' ? '#1a1a1a' : 'yellow';
    }, 400); // Switch colors every 0.4 seconds

    createGlowingParticles(['#ffeb3b', '#f57c00', '#29b6f6']); // Yellow, orange, blue for electric, fire, water

    setTimeout(() => {
        clearInterval(flashInterval);
        document.body.classList.remove('pokemon-effect');
        document.body.style.backgroundColor = ''; // Reset background color
        document.body.style.overflow = ''; // Restore overflow
    }, 7000);
}


function unlockSecretInMenu() {
    const themeSelector = document.getElementById('theme-selector');

    if (!document.querySelector('option[value="secret"]')) {
        const secretOption = document.createElement('option');
        secretOption.value = 'secret';
        secretOption.textContent = 'Secret theme: Mario';
        themeSelector.appendChild(secretOption);
    }
}

function unlockPokemonInMenu() {
    const themeSelector = document.getElementById('theme-selector');

    if (!document.querySelector('option[value="pokemon"]')) {
        const pokemonOption = document.createElement('option');
        pokemonOption.value = 'pokemon';
        pokemonOption.textContent = 'Secret theme: Pokemon';
        themeSelector.appendChild(pokemonOption);
    }
}

function bigUnlockEffect() {
    // Play the unlock sound for Pokémon theme
    const unlockSound = new Audio('sounds/unlocked2.wav');
    unlockSound.play();

    // Add the special effects for 7 seconds
    document.body.classList.add('pokemon-effect'); // Add the new exciting Pokémon effect class

    // Flashing background colors like electric shocks for Pikachu
    let flashInterval = setInterval(() => {
        document.body.style.backgroundColor = document.body.style.backgroundColor === 'yellow' ? '#1a1a1a' : 'yellow';
    }, 400); // Switch colors every 0.4 seconds

    // Create glowing particles that resemble electric sparks
    createGlowingParticles(['#ffeb3b', '#f57c00', '#29b6f6']); // Yellow, orange, blue for electric, fire, and water Pokémon

    // Stop the effect after 7 seconds
    setTimeout(() => {
        clearInterval(flashInterval); // Stop color flashing
        document.body.classList.remove('pokemon-effect'); // Remove the exciting effect class
        document.body.style.backgroundColor = ''; // Reset the background color
    }, 7000); // 7 seconds duration
}


function createGlowingParticles(colors = ['#ffeb3b', '#f57c00', '#29b6f6']) {
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

        // Add random Pokémon theme colors (electric, fire, water)
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = randomColor;

        setTimeout(() => {
            particle.remove();
        }, 5000); // Particles will exist for 5 seconds
    }

    setTimeout(() => {
        container.remove();
    }, 6000); // Container stays for a bit longer
}



function resetThemes() {
    if (confirm("Are you sure you want to reset the themes? You can always unlock them again.")) {
        localStorage.removeItem('selectedTheme');  // Remove the saved theme
        localStorage.removeItem('secretThemeUnlocked');
        localStorage.removeItem('pokemonThemeUnlocked');
        localStorage.removeItem('eredivisieThemeUnlocked');  // Reset Eredivisie theme
        
        // Reset the theme selector to 'animals' (default)
        const themeSelector = document.getElementById('theme-selector');
        themeSelector.value = 'animals';
        
        restartGame();  // Restart the game with the default theme
        alert("Themes have been reset to default (Animals).");
    }
}



document.addEventListener('keydown', checkCustomCode);
document.addEventListener('keydown', checkPokemonCode);

checkIfSecretThemeUnlocked();

function setSelectedTheme(theme) {
    localStorage.setItem('selectedTheme', theme);
}

function handleThemeChange() {
    const themeSelector = document.getElementById('theme-selector');
    const selectedTheme = themeSelector.value;
    setSelectedTheme(selectedTheme);  // Save the selected theme
    restartGame();
}

window.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');
    themeSelector.value = getSelectedTheme();  // Set the dropdown to the saved theme
    createBoard();  // Create the game board with the selected theme
});

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

        if (selectedTheme === 'secret' || selectedTheme === 'pokemon' || selectedTheme === 'eredivisie') {
            const imgElement = document.createElement('img');
            imgElement.src = card.img; // Use the 'img' path from the theme
            imgElement.alt = card.name;
            imgElement.classList.add('card-image'); // Add a class for styling
            frontFace.appendChild(imgElement);
        } else {
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

    // Add to global leaderboard
    let playerName = prompt("Enter your name (max 13 characters):");

    // Validate the player name length
    if (playerName.length > 13) {
        alert("Name is too long! It will be trimmed to 13 characters.");
        playerName = playerName.substring(0, 13);  // Trim to 13 characters
    }

    onGameFinish(playerName, elapsedTime);

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

    // Check if time is under 25 seconds to unlock Eredivisie theme
    if (elapsedTime < 25) {
        unlockEredivisieTheme();  // Unlock the Eredivisie theme if the player finishes in under 23 seconds
    }
}

function checkIfEredivisieThemeUnlocked() {
    const resetThemesBtn = document.getElementById('reset-themes-btn');
    if (localStorage.getItem('eredivisieThemeUnlocked') === 'true') {
        const themeSelector = document.getElementById('theme-selector');
        if (!document.querySelector('option[value="eredivisie"]')) {
            const eredivisieOption = document.createElement('option');
            eredivisieOption.value = 'eredivisie';
            eredivisieOption.textContent = 'Eredivisie Clubs';
            themeSelector.appendChild(eredivisieOption);
        }
        resetThemesBtn.style.display = 'block';
    }
}

checkIfEredivisieThemeUnlocked();

window.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');
    themeSelector.value = getSelectedTheme();  // Set the dropdown to the saved theme
    checkIfEredivisieThemeUnlocked();  // Check if the Eredivisie theme is unlocked
    createBoard();  // Create the game board with the selected theme
});



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
// Fix: Rendering personal best scores (old styling)
function renderHighScores() {
    // Get the high scores from localStorage
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    // Clear the current high score list display
    highscoreList.innerHTML = '';

    // Loop through each score and display it in the list with old styling
    highScores.forEach((score, index) => {
        const li = document.createElement('li');
        li.textContent = `${score.toFixed(3)} seconds`;

        // Apply old classes for first, second, and third places
        if (index === 0) {
            li.classList.add('personal-diamond');  // Old diamond styling for first place
        } else if (index === 1) {
            li.classList.add('personal-gold');  // Old gold styling for second place
        } else if (index === 2) {
            li.classList.add('personal-silver');  // Old silver styling for third place
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

// Get all audio elements
const sounds = [
    document.getElementById('flip-sound'),
    document.getElementById('match-sound'),
    document.getElementById('win-sound'),
    document.getElementById('lose-sound'),
    document.getElementById('background-music')
];

// Get the volume slider
const volumeSlider = document.getElementById('volume-slider');

// Function to update the volume of all sounds
function updateVolume() {
    const volume = volumeSlider.value / 100; // Slider value is between 0 and 100, convert to 0.0 - 1.0
    sounds.forEach(sound => {
        sound.volume = volume; // Set the volume for each sound element
    });
}

// Add an event listener to the volume slider to update the volume on input change
volumeSlider.addEventListener('input', updateVolume);

// Set the initial volume for all sounds based on the initial slider value
updateVolume();


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

async function removeAllScores() {
    try {
        // Fetch the current global leaderboard from JSONBin
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "X-Master-Key": apiKey
            }
        });
        const data = await response.json();

        // Set the leaderboard to an empty array
        const updatedData = {
            leaderboard: [],  // Clear the leaderboard
            resetPerformed: data.record.resetPerformed || false  // Keep the resetPerformed flag as is
        };

        // Send the updated empty leaderboard back to JSONBin
        await fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": apiKey
            },
            body: JSON.stringify(updatedData)
        });

        console.log('All scores have been removed from the leaderboard.');
        alert('All scores have been successfully removed.');
    } catch (error) {
        console.error('Error removing all scores:', error);
    }
}

// Call this function once to remove all scores
// removeAllScores();



createBoard();