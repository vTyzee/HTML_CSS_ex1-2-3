// Простейший слайдер для отзывов
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

// Функция, отображающая отзыв по индексу
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

// Запускаем первый отзыв
showTestimonial(currentIndex);

// Каждые 5 секунд переключаемся на следующий
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}, 5000);
