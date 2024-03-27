export function changeImagePathOnMedia() {
    const slide1 = document.getElementById('slideImg1');
    const slide2 = document.getElementById('slideImg2');
    const slide3 = document.getElementById('slideImg3');
    const slide4 = document.getElementById('slideImg4');
    const slide5 = document.getElementById('slideImg5');
    const slide6 = document.getElementById('slideImg6');
    const slide7 = document.getElementById('slideImg7');
    if (window.matchMedia('(max-width: 360)').matches) {
        document.body.style.backgroundImage = 'url("imagesWEBP/Background_360.webp")';
    } else if (window.matchMedia('(max-width: 480px)').matches) {
        slide1.src = 'imagesWEBP/Slide_1_mob_480.webp';
        slide2.src = 'imagesWEBP/Slide_2_mob_480.webp';
        slide3.src = 'imagesWEBP/Slide_3_mob_480.webp';
        slide4.src = 'imagesWEBP/Slide_4_mob_480.webp';
        slide5.src = 'imagesWEBP/Slide_5_mob_480.webp';
        slide6.src = 'imagesWEBP/Slide_6_mob_480.webp';
        slide7.src = 'imagesWEBP/Slide_7_mob_480.webp';
        document.body.style.backgroundImage = 'url("imagesWEBP/Background_480.webp")';

    } else if (window.matchMedia('(max-width: 768px)').matches) {
        document.body.style.backgroundImage = 'url("imagesWEBP/Background_768.webp")';
    } else if (window.matchMedia('(max-width: 1280px)').matches) {
        document.body.style.backgroundImage = 'url("imagesWEBP/Background_1280.webp")';
    } else {
        slide1.src = 'imagesWEBP/Slide_1_image.webp';
        slide2.src = 'imagesWEBP/Slide_2_image.webp';
        slide3.src = 'imagesWEBP/Slide_3_image.webp';
        slide4.src = 'imagesWEBP/Slide_4_image.webp';
        slide5.src = 'imagesWEBP/Slide_5_image.webp';
        slide6.src = 'imagesWEBP/Slide_6_image.webp';
        slide7.src = 'imagesWEBP/Slide_7_image.webp';
        document.body.style.backgroundImage = 'url("imagesWEBP/Background_1440.webp")';

    }
    window.addEventListener('load', changeImagePathOnMedia);
    window.addEventListener('resize', changeImagePathOnMedia);
}


