
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

function moveSlide(toIndex) { // function to move slide to another
    if (isMoving) return; // fix spamming click freezing slider
    isMoving = true;
    slides.style.transition = 'transform 0.5s ease'; // css transition animation
    slides.style.transform = `translateX(-${slideWidth * toIndex}px)`; // move slider container horizontally
    index = toIndex; // update slide index counter to new index
  }

document.getElementById('nextBtn').onclick = () => moveSlide(index + 1);
document.getElementById('prevBtn').onclick = () => moveSlide(index - 1);

slides.addEventListener('transitionend', () => { // wait till transition finishes
  const total = slides.children.length - 2;

  if (index === 0) { // check if index moved left past last slide clone
    slides.style.transition = 'none'; // temporarily turn off css transition
    index = total; // update to last real slide	
    slides.style.transform = `translateX(-${slideWidth * index}px)`; // move slide container to last real slide
  }

  if (index === total + 1) { // check if index moved right past last slide clone
    slides.style.transition = 'none';
    index = 1; // update to first real slide
    slides.style.transform = `translateX(-${slideWidth * index}px)`; // move slide container to first real slide
  }

});
