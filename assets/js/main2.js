
/* SLIDER */
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 6,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2000
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
  });