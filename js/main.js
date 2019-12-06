$(document).ready(function(){
  $(".banner__slider").owlCarousel({
    items: 1,
    nav: true,
    navText: ["&#9668;","&#9658;"],
    loop: true
  });
  $(".bar__slider").owlCarousel({
    items: 1,
    nav: true,
    navText: ["",""],
    loop: true
  });
  $(".product-banner__slider").owlCarousel({
    items: 3,
    nav: true,
    navText: ["&#9668;","&#9658;"],
    loop: true
  });
  $('.elya__head').on('click', function(){
    var find = $(this).next('.elya__text');
    find.slideToggle();
  });
});