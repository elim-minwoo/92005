
/* navsounds for other pages */

document.addEventListener('DOMContentLoaded', () => {
    const audioHover = new Audio('../assets/audio/hover_sfx.mp3');
    audioHover.volume = 0.3;
    audioHover.load();

    const pageElements = document.querySelectorAll('nav ul li a:not(.active), #nav_logo');

    pageElements.forEach(link => {
        link.addEventListener('mouseenter', () => {
            audioHover.currentTime = 0;
            audioHover.play();
        });
    });
});
