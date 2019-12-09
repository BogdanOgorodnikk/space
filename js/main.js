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
  $('.product-hot__recent').hide();


  $('.product-hot__item--button').on('click', function() {
    $(this).addClass('product-hot__item--active');
    $(this).removeClass('product-hot__item--disactive');
    $(this).prevAll().removeClass('product-hot__item--active');
    $(this).nextAll().removeClass('product-hot__item--active');
    $(this).prevAll().addClass('product-hot__item--disactive');
    $(this).nextAll().addClass('product-hot__item--disactive');
  });

  $('.product-hot__item--button').on('click', function() {
    var get_id = this.id;
    var get_current = $('.product-hot__general-box .' + get_id);

    $('.product-hot__type').not(get_current).hide(500);
    get_current.show(500);
  });
  $(".btn-nav").on("click", function() {
    var target = $(this).data("target");
    $(target).toggleClass("nav__list--open");
});
});