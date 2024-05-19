function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


function playSound(soundFile, button) {
    var audio = new Audio(soundFile);
    audio.play();
    button.classList.add('active');
    audio.onended = function() {
        button.classList.remove('active');
    };
}

function stopSound() {
    var sounds = document.getElementsByTagName('audio');
    for (var i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
}
