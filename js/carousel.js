const swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletClass: 'bulletClass',
      bulletActiveClass: "indicator-active",
      clickable: true
    },
  });