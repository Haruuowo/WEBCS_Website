// Functionality for media container (image, audio, and play/pause button)
function togglePlay(button) {
    const container = button.closest('.media-container');
    const audio = container.querySelector('.product-audio');
    const image = container.querySelector('.product-image');

    if (audio.paused) {
        audio.play(); // Play the audio
        image.style.opacity = 0; // Hide the image
        button.textContent = "Pause"; // Change the button text to "Pause"
    } else {
        audio.pause(); // Pause the audio
        image.style.opacity = 1; // Show the image again
        button.textContent = "Play"; // Change the button text back to "Play"
    }
}
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-bar').classList.toggle('active');
  });
  