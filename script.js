
const snowContainer = document.querySelector('.snow');
const clown = document.querySelector('.clown');
const scaryClown = document.querySelector('.scary-clown');
const screamSound = new Audio('https://www.myinstants.com/media/sounds/scream.mp3');

// Generar copos de nieve aleatorios
const snowflakeCount = 100;

for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('span');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    snowContainer.appendChild(snowflake);
}

// Efecto de parpadeo en el título
setInterval(() => {
    const title = document.querySelector('.title');
    title.style.color = title.style.color === '#ff0000' ? '#ffffff' : '#ff0000';
}, 500);

// Al pasar el ratón sobre el payaso original
clown.addEventListener('mouseenter', () => {
    screamSound.play(); // Reproducir el sonido
    scaryClown.style.opacity = '1'; // Mostrar el payaso sorpresa

    setTimeout(() => {
        scaryClown.style.opacity = '0';
    }, 3000);
});

// Cuando el ratón sale del payaso
clown.addEventListener('mouseleave', () => {
    screamSound.pause(); // Pausar el sonido
    screamSound.currentTime = 0; // Reiniciar el sonido
    scaryClown.style.opacity = '0'; // Asegurarse de que el payaso sorpresa esté oculto
});

// Efecto de movimiento en el payaso (zoom in y zoom out)
setInterval(() => {
    clown.style.transform = `translateX(-50%) scale(${Math.random() * 0.1 + 0.95})`;
}, 1500);

// Efecto de luces parpadeantes en el cartel
setInterval(() => {
    const poster = document.querySelector('.poster');
    poster.style.filter = `brightness(${Math.random() * 0.6 + 0.7})`;
}, 300);

// Seleccionar el elemento del título
const titleElement = document.querySelector('.title');
const titleText = titleElement.textContent;
titleElement.textContent = ''; // Limpiar el texto al inicio

// Función de efecto de máquina de escribir
let charIndex = 0;

function typeWriter() {
    if (charIndex < titleText.length) {
        titleElement.textContent += titleText[charIndex];
        charIndex++;
        setTimeout(typeWriter, 150); // Velocidad del efecto
    }
}

// Iniciar el efecto de máquina de escribir al cargar la página
window.addEventListener('load', typeWriter);
