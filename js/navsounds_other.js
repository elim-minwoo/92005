
/* navsounds for other pages */

document.addEventListener('DOMContentLoaded', () => {
    const audioHover = new Audio('../assets/audio/hover_sfx.mp3');
    audioHover.volume = 0.5;
    audioHover.load();

    const navLinks = document.querySelectorAll('nav ul li a:not(.active), #nav_logo, .divide');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            audioHover.currentTime = 0;

            if (link.classList.contains('divide')) {
                audioHover.volume = 0.1;
            } else {
                audioHover.volume = 0.3
            }

            audioHover.play();
        });
    });
});