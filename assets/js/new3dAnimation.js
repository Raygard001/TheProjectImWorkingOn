document.addEventListener('DOMContentLoaded', function() {

    const showSlider = new Swiper('showcase-Slayders', {
        loop: true,
        slidersPerView: 3,
        speed: 1800
    })

    document.querySelectorAll('#showcase__video').playbackRate = 2
})