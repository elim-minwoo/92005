
/*
JS notes because im going to forget:

const = "constant variable", cannot be reassigned
let = "let me change this," reassignable later

append = add to the end
appendChild = add child element to the end of another child element
*/

function SliderScript() {
  const slides = document.getElementById('slides'); // variable "slides" will always refer to elements with the id "slides"
  const slideWidth = 600;
  let index = 1; // count index
  let isMoving = false; // prevent overlapping animation

  const imgArray = Array.from(slides.children); // convert everything to array
  const firstClone = imgArray[0].cloneNode(true); // copy and store image
  const lastClone = imgArray[imgArray.length - 1].cloneNode(true); // copy and store image

  slides.appendChild(firstClone); // add first image clone to end
  slides.insertBefore(lastClone, slides.firstChild); // add last image clone to front
  slides.style.transform = `translateX(-${slideWidth * index}px)`;
}