(function($) {
  "use strict";

  $('a.page-scroll').bind('click', function(event) { // page scrolling feature (requires jQuery Easing plugin)
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  $('body').scrollspy({ // highlight the top nav as scrolling occurs
    target: '.navbar-fixed-top',
    offset: 100
  });

  $('.navbar-collapse ul li a').click(function() { // closes the responsive menu on click
    $('.navbar-toggle:visible').click();
  });

  $('#mainNav').affix({ // offset for main nav
    offset: {
      top: 50
    }
  })
})(jQuery);
