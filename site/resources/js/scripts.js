$(document).ready(function() {
  console.log("We are Mozilla Webmaker.");
  $('.dropdown-toggle').dropdown();

  $(window).scroll(function() {
    showSteps();
  });

});

function showSteps(){
  $('.step').each(function(i) {
    $(this).delay((i++) * 650).fadeTo(1000, 1);
  });
}
