document.addEventListener('DOMContentLoaded', function() {
  // Инициализация всех галерей
  const glides = document.querySelectorAll('.gallery-glide');
  
  glides.forEach((element) => {
    new Glide(element, {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      focusAt: 'center',
      gap: 20,
      autoplay: 3000,
      hoverpause: true,
      peek: {
        before: 50,
        after: 50
      },
      breakpoints: {
        1024: {
          perView: 2.5,
          peek: {
            before: 30,
            after: 30
          }
        },
        768: {
          perView: 1.8,
          gap: 15,
          peek: {
            before: 20,
            after: 20
          }
        },
        480: {
          perView: 1.2,
          gap: 10,
          peek: {
            before: 10,
            after: 10
          }
        }
      }
    }).mount();
  });

  // Год в футере
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}); 