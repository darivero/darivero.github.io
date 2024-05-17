var currentSound = null;

function playSound(soundFile, buttonElement) {
    // Detener el sonido actual si está en reproducción
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        // Restaurar estado visual del botón anteriormente activo
        if (currentSound.buttonElement) {
            currentSound.buttonElement.classList.remove('active');
        }
    }

    // Reproducir el sonido
    currentSound = new Audio(soundFile);
    currentSound.play();
    // Establecer estado visual del botón activo
    if (buttonElement) {
        buttonElement.classList.add('active');
        currentSound.buttonElement = buttonElement; // Guardar referencia al botón activo
    }

    // Escuchar el evento 'ended' para restaurar el estado visual del botón cuando la música termine
    currentSound.addEventListener('ended', function() {
        if (currentSound.buttonElement) {
            currentSound.buttonElement.classList.remove('active');
        }
    });
}

function stopSound() {
    // Detener el sonido actual si está en reproducción
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        // Restaurar estado visual del botón activo
        if (currentSound.buttonElement) {
            currentSound.buttonElement.classList.remove('active');
        }
    }
}

function toggleMenu() {
    var menu = document.getElementById('menu
