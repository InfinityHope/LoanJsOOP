import Slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();
    // slider.showPageByTime(3, 3000);
});