// Lista utworów do odtwarzania
const playlist = [
    "muzyka/Ariis - From The Top Phonk NCS - Copyright Free Music.mp3",
    "muzyka/Julius Dreisig & Zeus X Crona - Invisible [NCS Release].mp3"
];

let currentTrack = 0;
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

// Funkcja do zmiany utworu
function changeTrack(trackIndex) {
    if (trackIndex >= 0 && trackIndex < playlist.length) {
        audioSource.src = playlist[trackIndex];
        audioPlayer.load();
        audioPlayer.play();
    }
}

// Event listener na zakończenie utworu
audioPlayer.addEventListener('ended', function() {
    currentTrack++;
    if (currentTrack >= playlist.length) {
        currentTrack = 0;
    }
    changeTrack(currentTrack);
});

// Początkowe ustawienie pierwszego utworu
changeTrack(currentTrack);
