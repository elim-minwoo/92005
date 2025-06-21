
/*
JS notes because im going to forget:

const = "constant variable", cannot be reassigned
let = "let me change this," reassignable later

append = add to the end
appendChild = add child element to the end of another child element
*/

const popup = document.getElementById('audio_popup'); // select "audio_popup" element

const removePopup = () => { // define function "remove popup"
    popup.remove();  // remove popup
    window.removeEventListener('click', removePopup); // ignore clicks after popup removed
};

window.addEventListener('click', removePopup) // whenever user clicks, call "removePopup" function