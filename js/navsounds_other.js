
/* navsounds for other pages */

document.addEventListener('DOMContentLoaded', () => {
    const navHover = new Audio('../assets/audio/hover_sfx.mp3');
    navHover.volume = 0.5;
    navHover.load();

    const navLinks = document.querySelectorAll('nav ul li a:not(.active)');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            navHover.currentTime = 0;
            navHover.play();
        });
    });
});
