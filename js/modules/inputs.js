function initInputs() {
    function activeInput() {
        // НАходим все инпуты на странице
        const inputs = document.querySelectorAll('input');
        
        // На каждый инпут вешаем обработчик событий
        inputs.forEach(input => {
            input.addEventListener('focus', active);
            input.addEventListener('blur', notAtive);
            if(input.value !== '') thnxShowText();
        });
        // Если фокус на инпуте, то его родителю добавляем тень(свечение)
        function active() {
            this.closest('.promotion-form__input').classList.add('activeInput');
            this.closest('.promotion-form__input').previousElementSibling.style.opacity = '1'
        }
        // Если фокус снят, то удаляем тень с родителя
        function notAtive() {
            this.closest('.promotion-form__input').classList.remove('activeInput');
            this.closest('.promotion-form__input').previousElementSibling.style.opacity = '0'
        }

        // При отправке формы появляется надпись о том, что форм отправлена
        function thnxShowText() {
           const form = document.querySelector('form')
           const formBody = document.querySelector('.body-promotion__form')

            // Вешаем на форму обработчик отправки и удаляем поведение браузера по умолчанию
           form.addEventListener('submit', (e) => {
            e.preventDefault();

            // В случае успешной валидации выводим надпись
            const div = document.createElement('div');
            div.innerText = 'Спасибо, скоро с вами свяжутся.'
            div.style.cssText = 'margin-top: 10px; font-size: 20px; text-align:center';
            formBody.append(div);
            // Очищаем форму после отправки
            form.reset();
            // Удаляем надпись через 4 секунды
            setTimeout(() => {
                div.remove();     
            }, 4000);
           });
        }
        thnxShowText();
    }
    activeInput();

}

export default initInputs;