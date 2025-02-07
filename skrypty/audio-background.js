<script>
    document.addEventListener("DOMContentLoaded", function () {
        const video = document.getElementById("background-video");
        const button = document.getElementById("toggle-sound");
        const audio = document.getElementById("audio-player");

        button.addEventListener("click", () => {
            if (video.muted) {
                video.muted = false;
                video.volume = 1.0; // Ustawienie głośności na 100%
                button.textContent = "🔊 Wyłącz dźwięk";
                
                // Jeśli MP3 gra, zatrzymaj go
                if (!audio.paused) {
                    audio.pause();
                }
            } else {
                video.muted = true;
                button.textContent = "🔇 Włącz dźwięk";

                // Sprawdzenie, czy wideo nie ma dźwięku i odtwarzanie MP3
                if (video.muted || video.volume === 0) {
                    audio.play();
                }
            }
        });
    });
</script>