
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
  let index = 1; // slide index counter
  let isMoving = false; // prevent slide animation overlapping

  const imgArray = Array.from(slides.children); // converts everything from slides.children (everything inside "slides") into an array
  const firstClone = imgArray[0].cloneNode(true); // creates deep clone of first image and stores it
  const lastClone = imgArray[imgArray.length - 1].cloneNode(true); // creates deep clone of last image and stores it

  // .cloneNode(true) = makes a deep clone (completely independent clone) for loop

  slides.appendChild(firstClone); // adds "firstClone" to the very end
  slides.insertBefore(lastClone, slides.firstChild); // adds "last Clone" to the very front
  slides.style.transform = `translateX(-${slideWidth * index}px)`; // set initial position

  function moveSlide(toIndex) { // function to move slide img to another
    if (isMoving) return; // fix spamming click freezing slider
    isMoving = true;
    slides.style.transition = 'transform 0.5s ease'; // css transition animation
    slides.style.transform = `translateX(-${slideWidth * toIndex}px)`; // move slider container horizontally
    index = toIndex; // update slide index counter to new index
  }

  document.getElementById('nextBtn').onclick = () => moveSlide(index + 1); // move to next slide
  document.getElementById('prevBtn').onclick = () => moveSlide(index - 1); // move to previous slide

  slides.addEventListener('transitionend', () => { // wait till css transition has finished
    const total = slides.children.length - 2; // get actual number of real slides

    if (index === 0) { // check if index moved left past last slide clone
      slides.style.transition = 'none'; // temporarily turn off css transition
      index = total; // update to last real slide
      slides.style.transform = `translateX(-${slideWidth * index}px)`; // move slide container to last real slide
    }

    if (index === total + 1) { // check if index moved right past last slide clone
      slides.style.transition = 'none';
      index = 1; // update to first real slide
      slides.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    isMoving = false; // slide animation has finished, allows new slides to move again
    
  });
});
