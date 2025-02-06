const video = document.getElementById('background-video');
const button = document.getElementById('toggle-sound');

button.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        button.textContent = 'Wyłącz dźwięk';
    } else {
        video.muted = true;
         button.textContent = 'Włącz dźwięk';
    }
});