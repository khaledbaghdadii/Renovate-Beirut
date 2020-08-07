$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll < 550) {
    console.log(scroll);
    $("#navbar").removeClass("sticky-top fromTop");
  } else {
    $("#navbar").addClass("sticky-top fromTop");
  }

  if (scroll >= 250) {
    // document.querySelector("#logo-img").classList.addClass("fromLeft");
    // document.querySelector("#aboutus-text").classList.addClass("fromRight");
    $("#logo-img").addClass("fromLeft show");
    $("#aboutus-text").addClass("fromRight show");
  } else {
    // document.querySelector("#logo-img").classList.removeClass("fromLeft");
    // document.querySelector("#aboutus-text").classList.removeClass("fromRight");
    $("#logo-img").removeClass("fromLeft show");
    $("#aboutus-text").removeClass("fromRight show");
    $(".aboutus").removeClass("show");
  }
});
