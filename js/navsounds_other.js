
/* navsounds for other pages */

document.addEventListener('DOMContentLoaded', () => {
    const audioHover = new Audio('../assets/audio/hover_sfx.mp3');
    audioHover.volume = 0.3;
    audioHover.load();

    const navLinks = document.querySelectorAll('nav ul li a:not(.active), #nav_logo');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            audioHover.currentTime = 0;
            audioHover.play();
        });
    });
});
