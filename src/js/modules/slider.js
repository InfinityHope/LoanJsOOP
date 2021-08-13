export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page); //страница слайдера
        this.slides = this.page.children; //слайды 
        this.btns = document.querySelectorAll(btns); //кнопки переключения
        this.slideIndex = 1;
    }

    showSlides(n) { //Метод показа слайдов
        if (n > this.slides.length) {
            this.slideIndex = 1;
        } //Если слайдер дошел до конечного элемента, тогда вернуть его на 1 слайд

        if (n < 1) {
            this.slideIndex = this.slides.length;
        } //Если слайдер перелистан назад, то вернуть его к последнему слайду

        try{
            this.hanson.classList.add('fadeOut');
            
        } catch (e) {}
        

        this.slides.forEach(slide => {
            slide.classList.remove('show', 'fadeIn')
            slide.classList.add('hide', 'fadeOut')
            
        }); //Скрываем все слайды
        this.slides[this.slideIndex - 1].classList.remove('hide', 'fadeOut');
        this.slides[this.slideIndex - 1].classList.add('show', 'fadeIn');
         //Показываем первый слайд при рендере страницы
    }

    // showPageByTime (page, time) {
    //     setInterval(()=> {
    //         this.slideIndex = page;
    //         this.showSlides(this.slideIndex);
    //     }, time);
    // }

    plusSlides (n) {
        this.showSlides(this.slideIndex += n);
    } //функция перелистывания слайдов 

    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch(e){}


        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1); //Обработчик события на кнопки для перелистывания слайдов
            }); 

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => { //Возвращение к первому слайду по клику на лого
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}