$(document).ready(function() {
  
  // Adaptive Blue wrapper 

  function resizeWrapper() {
    var corner = $('.bonus__content').offset().left;
    var padding = parseInt($('.bonus__content').css('padding-left'));
    var value = $(window).width() - corner - padding;
    $('.blue-wrapper').css('width', value);
  }

  resizeWrapper();
  $(window).resize(resizeWrapper);

  // Sticky menu

    var navPos, scrolled;

    navPos = $('.navigation').offset().top;

    $(window).scroll(function(){
      scrolled = $(window).scrollTop();

      if( scrolled >= navPos) {
        $('.navigation').addClass('navigation--fixed');
      }
      else {
        $('.navigation').removeClass('navigation--fixed');
      }
    })

  // Mobile menu @ max-width: 480px

  $('.mobile-trigger').click(function() {
    $('.navigation__blocks').slideToggle('slow');
  });

  $(window).resize(function() {
    if (  $(window).width() > 480 ) {
      $('.navigation__blocks').removeAttr('style');
    }
  });


});

