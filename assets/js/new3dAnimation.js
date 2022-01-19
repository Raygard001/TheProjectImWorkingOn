document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
        speed: 1800,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
	})

    document.querySelectorAll('#showcase__video').playbackRate = 2
})