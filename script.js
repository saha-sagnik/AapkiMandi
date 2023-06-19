const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselContainer.children.length) % carouselContainer.children.length;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselContainer.children.length;
  updateCarousel();
});

function updateCarousel() {
  const itemWidth = carouselContainer.clientWidth;
  const translateX = -currentIndex * itemWidth;
  carouselContainer.style.transform = `translateX(${translateX}px)`;
}

updateCarousel();
