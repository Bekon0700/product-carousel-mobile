const swiperPop = new Swiper(".popSwiper", {
  zoom: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    horizontalClass: "dragColor",
  },
});

const swiper = new Swiper(".mySwiper", {
  // loop: true,
  speed: 500,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    bulletClass: "bulletClass",
    bulletActiveClass: "indicator-active",
    clickable: true,
  },
  // thumbs: {
  //   swiper: swiperPop,
  // },
});

let con = {}
swiper.once("slideChange", function (e) {
  let t = 0;
  e.slides.forEach((b, i) => {
    const r = $(b).hasClass('img-div')
    if(r){
      con[i]=t;
      t++;
    }
  })
});

swiper.on('slideChange', function(e) {
  con.hasOwnProperty(e.activeIndex) && swiperPop.slideTo(con[e.activeIndex], 0)
})

let revCon = {}
swiperPop.once('slideChange', function(e) {
  for(ind in con) {
    revCon[con[ind]] = ind
  }
})

