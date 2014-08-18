/* global $ */

$(document).ready(function () {
  $('.dropdown-toggle').dropdown();

  $(window).scroll(function () {
    $('.anm-step').each(function (i) {
      $(this).delay((i++) * 750).fadeTo(750, 1);
    });
  });
});
