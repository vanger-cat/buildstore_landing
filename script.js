// Пустой JS-файл для будущих функций 

// Прокрутка галерей по горизонтали колесом мыши

document.querySelectorAll('.gallery').forEach(gallery => {
  gallery.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    gallery.scrollLeft += evt.deltaY;
  });
});

// Автоматическая подстановка текущего года в футер
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
} 