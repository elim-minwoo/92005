
/*
JS notes because im going to forget:

const = "constant variable", cannot be reassigned
let = "let me change this," reassignable later

append = add to the end
appendChild = add child element to the end of another child element
*/

document.addEventListener('DOMContentLoaded', () => { // load script only when website loaded
    const audioHover = new Audio('assets/audio/hover_sfx.mp3'); // creates new audio object
    audioHover.volume = 0.3; // set volume of audio
    audioHover.load(); // load audio

    const pageElements = document.querySelectorAll('nav ul li a:not(.active), #nav_logo, button, .head_icon'); // store elements from page into "pageElements"

    pageElements.forEach(link => { // for each "pageElements" (loop)
        link.addEventListener('mouseenter', () => { // when mouse enters, fire event listener
            audioHover.currentTime = 0; // reset audio playback to 0
            audioHover.play(); // play audio
        }); 
    });
});
