export function Swiper (){
    const slider = document.querySelector('.slider-container');
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    slider.addEventListener('touchstart', touchStart);
    slider.addEventListener('touchmove', touchMove);
    slider.addEventListener('touchend', touchEnd);
    slider.addEventListener('touchcancel', touchEnd);

    function touchStart(event) {
        if (!isDragging) {
            isDragging = true;
            startPos = event.touches[0].clientX;
        }
    }

    function touchMove(event) {
        if (isDragging) {
            const currentPosition = event.touches[0].clientX;
            currentTranslate = prevTranslate + currentPosition - startPos;
            setSliderPosition();
        }
    }

    function touchEnd() {
        isDragging = false;
        prevTranslate = currentTranslate;
    }

    function setSliderPosition() {
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }
}