$(".yt-vid").on("click", (e) => {
  const videoId = $(e.target).data("vid-id");
  console.log($(e.target));
  $("#video").addClass("active");
  $("body").addClass("overflow-hidden");
  $(".carousel_container").addClass("z-neg");
  $(".video-yt").attr("src", `${$(".video-yt").data("src")}${videoId}`);
});

$("#cross-btn").on("click", () => {
  $("#video").removeClass("active");
  $(".carousel_container").removeClass("z-neg");
  $(".video-yt").attr("src", "");
});
