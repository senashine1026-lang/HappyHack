$(function ($) {
  $(".firstview").bgSwitcher({
    images: [
      "images/background1.jpg",
      "images/background2.jpg",
      "images/background3.jpg",
      "images/background4.jpg",
      "images/background5.jpg",
    ],
    interval: 3000,
    loop: true,
  });

  $(window).scroll(function () {
    $(".fadein").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", 1);
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  $(".slider").slick({
    autoplay: true,
    arrows: true,
    slidesToShow: 3,
    dots: true,
    infinite: true,
  });

  particlesJS("particles-js", {
    particles: {
      number: { value: 70 },
      size: { value: 1 },
      move: { speed: 7 },
    },
  });
});
