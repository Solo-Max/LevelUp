import initCarousel from './modules/carousel'
import initTimer from './modules/timer'
import initInputs from './modules/inputs'
import initScroll from './modules/scroll';

document.addEventListener("DOMContentLoaded", () => {
    initCarousel('.carousel__wrapper', '.carousel__item', '#nextBtn', '#prevBtn', 15000);
    initTimer("2222-12-11", );
    initInputs();
    initScroll();
});