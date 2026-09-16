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
  $(".slider").slick({
    autoplay: true,
    arrows: true,
    slidesToShow: 3,
    dots: true,
    infinite: true,
  });
});
