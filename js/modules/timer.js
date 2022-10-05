function initTimer(finish) {

    // Устанавливаем дату окончания акции
    let deadline = finish;

    // Функция инициализации текущего времени из милисекунд в современный понятный формат
    function createTimer(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        // Получаем 60 минут и делим пополам
        const  minutes = Math.floor( ((t/1000/60) % 60) / 2 ) ;
        const seconds = Math.floor( (t/1000) % 60 );

        // Возвращаем объект с актуальным форматом времени
        return {
            total: t,
            seconds: seconds,
            minutes: minutes,
        }
    }

    // Функция подставления 0 перед числом, если то меньше 10
    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    // Функция обновления и отображения таймера на странице
    function setClock(endtime) {
        // Получаем эллементы со страницы
        const elemTimer = document.querySelector('.timer__block');
        const elemMin = elemTimer.querySelector('#minutes');
        const elemSec = elemTimer.querySelector('#seconds');
        
        // Таймер обновляющий функцию обновления времени каждую секунду
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        // Функция устанавливающая текущее время и отрисовывающая данные в таймере в DOM
        function updateClock() {
            const t = createTimer(endtime);

            elemMin.innerHTML = getZero(t.minutes);
            elemSec.innerHTML = getZero(t.seconds);

            // Если время акции закончилось, то обнулить таймер
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }
    setClock(deadline);

}

export default initTimer;