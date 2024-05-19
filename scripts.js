let currentAudio = null;

function playSound(src, button) {
    // Detener el audio actual si hay uno
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Crear un nuevo elemento de audio y reproducirlo
    currentAudio = new Audio(src);
    currentAudio.play();

    // Resaltar el botón activo
    const buttons = document.querySelectorAll('.botones button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function stopSound() {
    // Detener el audio actual si hay uno
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Eliminar la clase activa de todos los botones
    const buttons = document.querySelectorAll('.botones button');
    buttons.forEach(button => button.classList.remove('active'));
}

// Función para mostrar y ocultar el menú desplegable
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Ocultar el menú cuando se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        const menu = document.getElementById('menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    }
}
