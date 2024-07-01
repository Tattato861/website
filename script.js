const turtleContainer = document.querySelector('.turtle-container');
const songAudio = document.getElementById('song-audio');

// Function to play the happy birthday song
function playSong() {
    songAudio.play();
}

// Create and add turtles to the container
for (let i = 0; i < 7; i++) { // Increased the number of turtles to 7
    const turtle = document.createElement('img');
    
    // Use different turtle image URLs for variety
    if (i % 2 === 0) {
        turtle.src = 'https://placeimg.com/100/100/animals/turtle';
    } else {
        turtle.src = 'https://placeimg.com/100/1
