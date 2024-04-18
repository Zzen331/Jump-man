// Get the character element
const character = document.getElementById('character');

// Set initial position
let posX = 0;
let posY = 0;

// Function to update character position
function updateCharacterPosition() {
    character.style.left = posX + 'px';
    character.style.top = posY + 'px';
}

// Event listener for key presses
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    // Move character based on WASD keys
    switch (key) {
        case 'w':
            posY -= 10;
            break;
        case 'a':
            posX -= 10;
            break;
        case 's':
            posY += 10;
            break;
        case 'd':
            posX += 10;
            break;
    }

    // Update character position
    updateCharacterPosition();
});
