export function initializeSlider() {
    document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector('.slider');
        const sliderContainer =  document.querySelector('.slider-container');
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
        let startX = null;

        function handleStart(x) {
            startX = x;
        }

        function handleMove(x) {
            if (startX === null) return;

            const deltaX = startX - x;
            startX = null;

            if (deltaX < 0) {
                console.log('else');
                goToSlide(currentIndex - 1);
            } else {
                console.log('if');
                goToSlide(currentIndex + 1);
            }
            console.log(deltaX);
        }

        sliderContainer.addEventListener('touchstart', e => handleStart(e.touches[0].clientX));
        sliderContainer.addEventListener('touchmove', e => handleMove(e.touches[0].clientX));

        sliderContainer.addEventListener('mousedown', e => handleStart(e.clientX));
        sliderContainer.addEventListener('mousemove', e => handleMove(e.clientX));
        sliderContainer.addEventListener('mouseup', () => startX = null);

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
