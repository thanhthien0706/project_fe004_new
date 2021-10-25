"use strict";

$(document).ready(function () {
  $('.show_slide').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true
  });
  $('.show_menu').click(function () {
    $('.menu_respontive_ovelay').css({
      'right': 0
    });
    $('.menu_respontive').css({
      'right': 0
    });
  });
  $('.menu_respontive_ovelay').click(function () {
    $(this).css({
      'right': 'unset'
    });
    $('.menu_respontive').css({
      'right': '-100%'
    });
  });
});
$(window).scroll(function () {
  var numberScroll = $(this).scrollTop();

  if (numberScroll > 80) {
    $('.go_top').css({
      'position': 'fixed',
      'z-index': '990',
      'right': '20px',
      'bottom': '80px'
    });
  } else {
    $('.go_top').css({
      'position': 'relative',
      'z-index': '0',
      'right': 'unset',
      'bottom': 'unset'
    });
  }
});