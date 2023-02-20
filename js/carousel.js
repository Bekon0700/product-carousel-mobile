const swiper = new Swiper(".mySwiper", {
  loop: true,
  zoom: true,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    bulletClass: 'bulletClass',
    bulletActiveClass: "indicator-active",
    clickable: true
  },
});

const swiperPop = new Swiper(".popSwiper", {
  zoom: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    horizontalClass: '.dragColor'
  }
});