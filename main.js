document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
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


    let arrowButton =  document.getElementById('footerArrowTop')
    let section1 = document.getElementById('section1');
    function ArrowTopDown() {
        window.scrollTo(0, 0)
    }
    arrowButton.addEventListener('click', ArrowTopDown)

    function VisibleArrow() {
        if (window.scrollY < section1.offsetTop) {
            arrowButton.style.display = 'none';
        } else {
            arrowButton.style.display = 'inline';
        }
    }
    window.addEventListener('scroll',VisibleArrow )
});