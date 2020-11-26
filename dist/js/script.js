document.addEventListener('DOMContentLoaded', function() {
   const rellaxNotCentered = new Rellax('.rellaxNotCentered');
   const rellaxCentered = new Rellax('.rellaxCentered', {
      center: true
   });

   const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed: 700,
      slidesPerView: 4,
      spaceBetween: 72,

      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next-unique',
         prevEl: '.swiper-button-prev-unique',
      },

      // Responsive breakpoints
      breakpoints: {
         // when window width is >= 320px
         320: {
            slidesPerView: 'auto',
            spaceBetween: 20
         },
         // when window width is >= 480px
         480: {
            slidesPerView: 'auto',
            spaceBetween: 30
         },
         // when window width is >= 640px
         576: {
            slidesPerView: 2,
            spaceBetween: 40
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 50
         },
         1200: {
            slidesPerView: 4,
         }
      }
   })
})