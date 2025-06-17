// Пустой JS-файл для будущих функций 

// Прокрутка галерей по горизонтали колесом мыши

document.querySelectorAll('.gallery').forEach(gallery => {
  gallery.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    gallery.scrollLeft += evt.deltaY;
  });
}); 