export function initializeSlider() {
    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const slideWidth = slides[0].clientWidth;
        let currentIndex = 0;
        const leftArrow = document.querySelector('.slider-btn-left')
        const rightArrow = document.querySelector('.slider-btn-right')

        function goToSlide(index) {
            currentIndex = index;
            let currentSlide = slides[currentIndex]
            const offset = -((currentIndex * slideWidth));

            if (index < 0) {
                index = totalSlides - 1;
            } else if (index >= totalSlides) {
                index = 0;
            }
            if (index === 6) {
                rightArrow.style.display = "none"
            } else {
                rightArrow.style.display = "flex"
            }
            if (index === 0) {
                leftArrow.style.display = "none"
            } else {
                leftArrow.style.display = "flex"
            }
            slider.style.transform = `translateX(${offset}px)`;
        }

        leftArrow.addEventListener('click', function () {
            goToSlide(currentIndex - 1);
        });

        rightArrow.addEventListener('click', function () {
            goToSlide(currentIndex + 1);
        });
        setInterval(function () {
            if (currentIndex <= 5){
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(currentIndex = 0);
            }
        }, 4000);


    });
}
