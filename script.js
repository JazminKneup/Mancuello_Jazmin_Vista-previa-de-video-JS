console.log("page loaded...");

// Esta función sirve para reproducir el video
function reproducir(videoElement) {
    videoElement.play();
    videoElement.muted=true;
}

// Con esta función pausamos el video
function pausa(videoElement) {
    videoElement.pause();
}
