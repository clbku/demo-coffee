$(document).ready(function () {
  $(".slide-fade").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });

  $("#easy-filter-wrap").easyFilter({
    animation: "fade",
    duration: 200,
  });

  $(".filter-buttons button").click(function () {
    $(".filter-buttons button").removeClass("active");
    $(this).addClass("active");
  });
  $("#byProduct").modal({})
});
