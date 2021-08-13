import VideoPlayer from "./modules/playVideo";
import Slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    slider.render();
    // slider.showPageByTime(3, 3000);
    const videoPlayer = new VideoPlayer('.showup .play','.overlay');
    videoPlayer.init();
});