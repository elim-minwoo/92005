
/*
JS notes because im going to forget:

const = "constant variable", cannot be reassigned
let = "let me change this," reassignable later

append = add to the end
appendChild = add child element to the end of another child element
*/

document.addEventListener("DOMContentLoaded", () => { // load script only when website loaded
  const slides = document.getElementById('slides'); // variable "slides" will always refer to elements with the id "slides"
  const slideWidth = 600; // variable for slide's width, to calculate the animation
  let index = 1; // count index
  let isMoving = false; // stop animation overlapping

  const imgArray = Array.from(slides.children); // convert everything to array
  const firstClone = imgArray[0].cloneNode(true); // creates deep copy of first image and stores it
  const lastClone = imgArray[imgArray.length - 1].cloneNode(true); // creates deep copy of last image and stores it
  
  // .cloneNode(true) = makes a deep clone (completely independent clone) for loop

  slides.appendChild(firstClone); // adds "firstClone" to the end
  slides.insertBefore(lastClone, slides.firstChild); // adds "lastClone" to the very front
  slides.style.transform = `translateX(-${slideWidth * index}px)`; // set initial position

  function moveSlide(toIndex) { // function to move slide to another
    if (isMoving) return; // fix spamming click freezing slider
    isMoving = true;
    slides.style.transition = 'transform 0.5s ease'; // css transition animation
    slides.style.transform = `translateX(-${slideWidth * toIndex}px)`; // move slider
    index = toIndex;
  }

  document.getElementById('nextBtn').onclick = () => moveSlide(index + 1); // move to next slide
  document.getElementById('prevBtn').onclick = () => moveSlide(index - 1); // move to previous slide

  slides.addEventListener('transitionend', () => {
    const total = slides.children.length - 2;

    if (index === 0) { 
      slides.style.transition = 'none'; // temporarily turn off css transition
      index = total; // update to last slide
      slides.style.transform = `translateX(-${slideWidth * index}px)`; // move slide container
    }

    if (index === total + 1) {
      slides.style.transition = 'none';
      index = 1;
      slides.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    isMoving = false; // slide animation has finished, allows new slides to move again
  });
});
