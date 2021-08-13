export default class Slider {
    constructor({page = "", btns = "", next = "", prev = ""} = {}) {
        this.page = document.querySelector(page); //страница слайдера
        this.slides = this.page.children; //слайды 
        this.btns = document.querySelectorAll(btns); //кнопки переключения
        this.slideIndex = 1;
    }
 
}

    
