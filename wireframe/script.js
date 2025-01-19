document.addEventListener('DOMContentLoaded', () => {
  // Модальное окно
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModal');

  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Переключение темы
  const themeToggleCheckbox = document.getElementById('theme-toggle');
  if (themeToggleCheckbox) {
    themeToggleCheckbox.addEventListener('change', function() {
      document.body.classList.toggle('light-theme');
    });
  }

  // Карусель (слайды)
  const slides = document.querySelectorAll('.carousel__slide');
  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    startSlideShow();
  }

  const carouselContainer = document.querySelector('.carousel__container');
  carouselContainer.addEventListener('mouseenter', stopSlideShow);
  carouselContainer.addEventListener('mouseleave', startSlideShow);
});
