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
});