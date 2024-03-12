document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    const leftArrow = document.querySelector('.slider-btn-left')
    const rightArrow = document.querySelector('.slider-btn-right')

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        if (index === 6) {
            rightArrow.style.display = "none"
        } else{
            rightArrow.style.display = "inline"
        }
        if (index === 0) {
            leftArrow.style.display = "none"
        } else{
            leftArrow.style.display = "inline"
        }
        currentIndex = index;
        const offset = -((currentIndex * slideWidth) + (40 * currentIndex));
        slider.style.transform = `translateX(${offset}px)`;
    }

    document.querySelector('.slider-btn-left').addEventListener('click', function () {
        goToSlide(currentIndex - 1);
    });

    document.querySelector('.slider-btn-right').addEventListener('click', function () {
        goToSlide(currentIndex + 1);
    });


    let arrowButton = document.getElementById('footerArrowTop')
    let section1 = document.getElementById('section1');

    function ArrowTopDown() {
        window.scrollTo(0, 0)
    }


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
    const button1 = document.getElementById('order_now_button1');
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
        const isClickOnButton1 = event.target === button1;

        if (!isClickInsidePopup && !isClickOnButton1 && !isClickOnButton2) {
            popup.style.display = 'none';
        }
    });


    function SendData(event) {
        event.preventDefault()
        console.log(event)

    }

    button1.addEventListener('click', handleClick);
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
        } else {
            nav.classList.add("openHeaderUl");
            nav.classList.remove("closeHeaderUl");
        }
    }

    menuIcon.addEventListener('click', toggleMenu);
// Дополнительный обработчик для закрытия меню по клику вне его области
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
          console.log('close')
        }
    });

});