document.addEventListener('DOMContentLoaded', () => {
  // ----- Модальное окно (если оно есть на странице) -----
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

  // ----- Переключение темы с сохранением в Local Storage -----
  const themeToggleCheckbox = document.getElementById('theme-toggle');
  if (themeToggleCheckbox) {
    // 1) При загрузке проверяем, есть ли в Local Storage запись о теме
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggleCheckbox.checked = true; // Чекбокс включён
    } else {
      // Иначе считаем, что тема светлая (или ничего не делаем)
      document.body.classList.remove('dark-theme');
      themeToggleCheckbox.checked = false;
    }

    // 2) По клику на чекбокс меняем класс + сохраняем в Local Storage
    themeToggleCheckbox.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // ----- Карусель (если есть) -----
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
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopSlideShow);
    carouselContainer.addEventListener('mouseleave', startSlideShow);
  }
});
