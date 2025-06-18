
  document.addEventListener("DOMContentLoaded", function () {
    const images = [
      '/images/moving_castle_final.jpg',
      '/images/endless_engines_1920.png',
      '/images/jetpack_cat.png',
      '/images/robotic_wildlife_main_render.jpg',
      // add more images as needed
    ];

  const slideshow = document.querySelector('.bg-slideshow');

  let currentIndex = 0;
  const slides = [];

  // Create 2 slides for crossfading
  for (let i = 0; i < 2; i++) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slideshow.appendChild(slide);
    slides.push(slide);
  }

  // Initial backgrounds
  slides[0].style.backgroundImage = `url('${images[0]}')`;
  slides[0].classList.add('show');

  setInterval(() => {
    const nextIndex = (currentIndex + 1) % images.length;

    // Prepare the hidden slide with next image
    const currentSlide = slides[currentIndex % 2];
    const nextSlide = slides[(currentIndex + 1) % 2];

    nextSlide.style.backgroundImage = `url('${images[nextIndex]}')`;

    // Show the next slide
    nextSlide.classList.add('show');
    currentSlide.classList.remove('show');

    currentIndex = nextIndex;
  }, 3000);
});
