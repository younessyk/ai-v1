$(document).ready(function () {

  $('h3#CARLINE').hide();

  $('img#c1').delay(1200).fadeOut(120);
  $('img#c2').hide(0).delay(1320).fadeIn(300);

  $('span.b').show(300).delay(1200).addClass('bold-big').delay(1800).addClass('bold-big');
  $('span.chide').hide(1200).delay(1800).show(300);

  $('h4.c').slideUp(3600).delay(1800).addClass('bold-big').show(300);
  $('h3#CARLINE').slideDown(3600);

});
