
const popup = document.getElementById('audio_popup');

const removePopup = () => {
    popup.remove();
    window.removeEventListener('click', removePopup);
};

window.addEventListener('click', removePopup)