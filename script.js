document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const img = document.getElementById('myImage');
    const clickSound = document.getElementById("clickSound");
    const backgroundAudio = document.getElementById("backgroundAudio");

    startButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action if needed

        // Play click sound
        clickSound.play();

        // Add a delay before playing the background audio
        setTimeout(function() {
            backgroundAudio.play(); // Play background audio
        }, clickSound.duration * 1000); // Wait for the click sound to finish playing

        // Add the fade-out class to the image
        img.classList.add('fade-out');

        // Remove the image from the DOM after the animation completes
        setTimeout(function() {
            img.remove();
        }, 1000); // 1000ms matches the CSS transition duration
    });
});
