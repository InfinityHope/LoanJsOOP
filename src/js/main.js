import VideoPlayer from "./modules/playVideo";
import MainSlider from './modules/slider/slider-main'

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({
        btns: '.next',
        page: '.page'
    });
    slider.render();
    // slider.showPageByTime(3, 3000);
    const videoPlayer = new VideoPlayer('.showup .play','.overlay');
    videoPlayer.init();
});