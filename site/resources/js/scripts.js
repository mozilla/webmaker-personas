/* global $ */

$(document).ready(function () {
  $('.dropdown-toggle').dropdown();

  $(window).scroll(function () {
    $('.anm-step').each(function (i) {
      $(this).delay((i++) * 1000).fadeTo(1000, 1);
    });
  });
});
