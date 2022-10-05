function initCarousel(wrap, items, btnN, btnP, time) {
    // Ищем элементы по селектору
    const wrapperCarousel = document.querySelector(wrap);
    const carouselItems = document.querySelectorAll(items);
    const btnNext = document.querySelector(btnN);
    const btnPrev = document.querySelector(btnP);
    const item = document.querySelector('.item-carosuel')

    // Технические переменные
    let index = 1;
    let position = 0;
    let widthItem = +window.getComputedStyle(item).width.replace(/\D/g, '');

    // Функция проверки текущего положения элемента слайдера
    function checkedPosition() {
        if(index > carouselItems.length) {
            index = 1;
            position = 0;
        }

        if(index < 1) {
            index = carouselItems.length
            position = (carouselItems.length - 1) * widthItem;
        }
    }

    // Навешиваем обработчики события на кнопки управления
    btnNext.addEventListener('click', movieCarouselNext);
    btnPrev.addEventListener('click', movieCarouselPrev);

    // Функция перемотки слайдера вперёд.
    // При клике изменяет технические переменные.
    // Запускет функцию проверки
    // Изменяет положение за счёт инлайн стилей
    function movieCarouselNext() {
        index +=1;
        position += widthItem;
        checkedPosition();
        wrapperCarousel.style.transform = `translateX(-${position}px)`;
    }
    // Функция перемотки слайдера назад.
    // Аналогично с предыдущей функцией
    function movieCarouselPrev() {
        index-=1;
        position -= widthItem;
        checkedPosition()
        wrapperCarousel.style.transform = `translateX(-${position}px)`;
    }

    // Таймер перемотки слайдера(15 сек.)
    setInterval(() => {
        movieCarouselNext();
    }, time);
}

export default initCarousel;