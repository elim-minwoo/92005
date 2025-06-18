
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.getElementById('slides');
  const slideWidth = 900;
  let index = 1;
  let isMoving = false;

  const imgArray = Array.from(slides.children);
  const firstClone = imgArray[0].cloneNode(true);
  const lastClone = imgArray[imgArray.length - 1].cloneNode(true);

  slides.appendChild(firstClone);
  slides.insertBefore(lastClone, slides.firstChild);
  slides.style.transform = `translateX(-${slideWidth * index}px)`;

  function moveSlide(toIndex) {
    if (isMoving) return;
    isMoving = true;
    slides.style.transition = 'transform 0.5s ease';
    slides.style.transform = `translateX(-${slideWidth * toIndex}px)`;
    index = toIndex;
  }

  document.getElementById('nextBtn').onclick = () => moveSlide(index + 1);
  document.getElementById('prevBtn').onclick = () => moveSlide(index - 1);

  slides.addEventListener('transitionend', () => {
    const total = slides.children.length - 2;

    if (index === 0) { 
      slides.style.transition = 'none';
      index = total;
      slides.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    if (index === total + 1) {
      slides.style.transition = 'none';
      index = 1;
      slides.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    isMoving = false;
    
  });
});
