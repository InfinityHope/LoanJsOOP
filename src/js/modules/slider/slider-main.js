import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns); 
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
            if (n === 3) {
                setTimeout(()=>{
                    this.hanson.classList.add('show', 'fadeIn');
                    this.hanson.classList.remove('hide', 'fadeOut');
                }, 3000);
            } else {
                this.hanson.classList.add('hide', 'fadeOut');
                this.hanson.classList.remove('show', 'fadeIn');
            }
        } catch (e) {}
        

        this.slides.forEach(slide => {
            slide.classList.remove('animated','show', 'slideInUp')
            slide.classList.add('hide')
            
        }); //Скрываем все слайды
        this.slides[this.slideIndex - 1].classList.remove('hide');
        this.slides[this.slideIndex - 1].classList.add('animated','show', 'slideInUp');
        //Показываем первый слайд при рендере страницы
        // showPageByTime (page, time) {
        //     setInterval(()=> {
        //         this.slideIndex = page;
        //         this.showSlides(this.slideIndex);
        //     }, time);
        // }
    }

    plusSlides (n) {
        this.showSlides(this.slideIndex += n);
    } //функция перелистывания слайдов 

    init() {
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
