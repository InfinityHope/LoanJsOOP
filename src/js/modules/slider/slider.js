export default class Slider {
    constructor({
        container = null, 
        btns = null,
        next = null, 
        prev = null,
        activeClass = '',
        animate,
        autoplay,
        slideLeft = null,
        } = {}) {

        this.container = document.querySelector(container); //страница слайдера
        try {this.slides = this.container.children;} catch(e){}//слайды 
        this.btns = document.querySelectorAll(btns); //кнопки переключения
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.animate = animate;
        this.activeClass = activeClass;
        this.autoplay = autoplay;
        this.slideIndex = 1;
        this.slideLeft = slideLeft;
    }
 
}

    
