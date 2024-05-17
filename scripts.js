var currentSound = null;

function playSound(soundFile, buttonElement) {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        if (currentSound.buttonElement) {
            currentSound.buttonElement.classList.remove('active');
        }
    }

    currentSound = new Audio(soundFile);
    currentSound.play();
    if (buttonElement) {
        buttonElement.classList.add('active');
        currentSound.buttonElement = buttonElement;
    }

    currentSound.addEventListener('ended', function() {
        if (currentSound.buttonElement) {
            currentSound.buttonElement.classList.remove('active');
        }
    });
}

function stopSound() {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
        if (currentSound.buttonElement) {
            currentSound.buttonElement.classList.remove('active');
        }
    }
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

}
