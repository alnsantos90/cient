 // SLIDER PRINCIPAL
 var swiper = new Swiper('.cient-container', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.slider__arrows--right',
      prevEl: '.slider__arrows--left',
  },
});