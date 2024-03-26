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
            console.log(slideWidth)
        });

        rightArrow.addEventListener('click', function () {
            goToSlide(currentIndex + 1);
            console.log(slideWidth)
        });
        /*setInterval(function () {
            if (currentIndex <= 5){
                goToSlide(currentIndex + 1);
                console.log(currentIndex)
            } else {
                goToSlide(currentIndex = 0);
                console.log(currentIndex)
            }
        }, 4000);*/

        const slide1 = document.getElementById('slideImg1');
        const slide2 = document.getElementById('slideImg2');
        const slide3 = document.getElementById('slideImg3');
        const slide4 = document.getElementById('slideImg4');
        const slide5 = document.getElementById('slideImg5');
        const slide6 = document.getElementById('slideImg6');
        const slide7 = document.getElementById('slideImg7');

        function changeImagePathOnMedia() {
            if (window.matchMedia('(max-width: 480px)').matches) {
                slide1.src = 'images/Slide_1_mob_480.png';
                slide2.src = 'images/Slide_2_mob_480.png';
                slide3.src = 'images/Slide_3_mob_480.png';
                slide4.src = 'images/Slide_4_mob_480.png';
                slide5.src = 'images/Slide_5_mob_480.png';
                slide6.src = 'images/Slide_6_mob_480.png';
                slide7.src = 'images/Slide_7_mob_480.png';
            } else {
                slide1.src = 'images/Slide_1_image.png';
                slide2.src = 'images/Slide_2_image.png';
                slide3.src = 'images/Slide_3_image.png';
                slide4.src = 'images/Slide_4_image.png';
                slide5.src = 'images/Slide_5_image.png';
                slide6.src = 'images/Slide_6_image.png';
                slide7.src = 'images/Slide_7_image.png';
            }
        }

        window.addEventListener('load', changeImagePathOnMedia);
        window.addEventListener('resize', changeImagePathOnMedia);

    });
}
