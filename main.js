import {initializeSlider} from './js/sliderModule.js';
import {changeImagePathOnMedia} from './js/changePhotoModule.js'
import {changeColorLink} from './js/changeColorLink.js'
import { sendMessageToChannel } from './js/TelegramAPIModule.js'

initializeSlider();
changeImagePathOnMedia();
changeColorLink();
sendMessageToChannel()
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

    const popup = document.getElementById('popupOrderContent');
    const button2 = document.getElementById('order_now_button2');
    const closePopup1 = document.getElementById('closePopupButton1')
    const closePopup2 = document.getElementById('closePopupButton2')
    const buttonForm = document.getElementById('popupOrderFormButton')

    function handleClick() {
        popup.style.display = 'flex';
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    document.addEventListener('click', function (event) {
        const isClickInsidePopup = popup.contains(event.target);
        const isClickOnButton2 = event.target === button2;

        if (!isClickInsidePopup && !isClickOnButton2) {
            popup.style.display = 'none';
        }
    });


    function SendData(event) {
        event.preventDefault()
        console.log(event)

    }

    button2.addEventListener('click', handleClick);
    closePopup1.addEventListener('click', closePopup);
    closePopup2.addEventListener('click', closePopup);
    buttonForm.addEventListener('click', SendData)


    // Получаем элементы
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