$(".img-div").on("click", function (e) {
  $("#zoom").addClass("active");
  $("body").addClass("overflow-hidden");
  $(".carousel_container").addClass("z-neg");
});

$("#zoom-close").on("click", function () {
  $("#zoom").removeClass("active");
  $("body").removeClass("overflow-hidden");
  $(".carousel_container").removeClass("z-neg");

  revCon.hasOwnProperty(swiperPop.activeIndex) &&
    swiper.slideTo(revCon[swiperPop.activeIndex], 0);
});

$(document).on("click", "body", (e) => {
  if (
    $(e.target).closest(".swiper-slide").is(".swiper-slide") ||
    $(e.target).hasClass("video-close")
  ) {
    return;
  }

  if ($(e.target).hasClass("video-overlay")) {
    $("#video").removeClass("active");
    $("body").removeClass("overflow-hidden");
    $(".carousel_container").removeClass("z-neg");
    $(".video-yt").attr("src", "");

    return;
  }

  revCon.hasOwnProperty(swiperPop.activeIndex) &&
    swiper.slideTo(revCon[swiperPop.activeIndex], 0);

  $("#zoom").removeClass("active");
  $("body").removeClass("overflow-hidden");
  $(".carousel_container").removeClass("z-neg");
});
