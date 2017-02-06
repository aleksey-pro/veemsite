$(document).ready(function() {
  
  // Adaptive Blue wrapper 

  function resizeWrapper() {
    var corner = $('.bonus__content').offset().left;
    var padding = parseInt($('.bonus__content').css('padding-left'));
    var value = $(window).width() - corner - padding;
    $('.blue-wrapper').css('width', value);
    console.log(value);
  }

  resizeWrapper();
  $(window).resize(resizeWrapper);

});

