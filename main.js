import {initializeSlider} from './js/sliderModule.js';
import {changeImagePathOnMedia} from './js/changePhotoModule.js'
import {changeColorLink} from './js/changeColorLink.js'
import { sendMessageToChannel } from './js/TelegramAPIModule.js'
import { Swiper } from './js/swiperModule.js'
import { Popup } from './js/popupModule.js'

initializeSlider();
changeImagePathOnMedia();
changeColorLink();
sendMessageToChannel()
Swiper()
Popup()
document.addEventListener("DOMContentLoaded", function () {

    let arrowButton = document.getElementById('footerArrowTop')
    let section1 = document.getElementById('section1');

    function ArrowTopDown() {
        window.scrollTo(0, 0)
    }

    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    function VisibleArrow() {
        if (window.scrollY < section1.offsetTop) {
            arrowButton.style.display = 'none';
        } else {
            arrowButton.style.display = 'inline';
        }
    }

    arrowButton.addEventListener('click', ArrowTopDown)
    VisibleArrow()
    window.addEventListener('scroll', VisibleArrow)



    const menuIcon = document.querySelector('.adaptiveHeaderMenu-icon');
    const nav = document.querySelector('.adaptiveHeaderUl');

    function toggleMenu() {
        if (nav.classList.contains("openHeaderUl")) {
            nav.classList.add("closeHeaderUl");
            nav.classList.remove("openHeaderUl");
            menuIcon.classList.remove("closeIcon");
        } else {
            nav.classList.add("openHeaderUl");
            nav.classList.remove("closeHeaderUl");
            menuIcon.classList.add("closeIcon");
        }
    }

    menuIcon.addEventListener('click', toggleMenu);
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
            nav.classList.add("closeHeaderUl");
            nav.classList.remove("openHeaderUl");
            menuIcon.classList.remove("closeIcon");
        }
    });

});