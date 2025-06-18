
function SliderScript() {
  const slides = document.getElementById('slides');
  const slideWidth = 600;
  let index = 1;
  let isMoving = false;

  const imgArray = Array.from(slides.children);
  const firstClone = imgArray[0].cloneNode(true);
  const lastClone = imgArray[imgArray.length - 1].cloneNode(true);

  slides.appendChild(firstClone);
  slides.insertBefore(lastClone, slides.firstChild);
  slides.style.transform = `translateX(-${slideWidth * index}px)`;
}