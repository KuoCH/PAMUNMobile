$(window).load( function () {
  $('.sb-content').on('tap', function(e) {
    if ($('#wrapper').hasClass('sb-active')) {
      e.preventDefault();
      $('#wrapper').removeClass('sb-active');
      return false;
    }
  });

  $.event.special.swipe.scrollSupressionThreshold = 100;
  $.event.special.swipe.horizontalDistanceThreshold = 100;
  $.event.special.swipe.verticalDistanceThreshold = 15;
  $('#wrapper').on('swipeleft', function(e) {
    if ($('#wrapper').hasClass('sb-active')) {
      e.preventDefault();
      $('#wrapper').removeClass('sb-active');
      return false;
    }
  });

  $('.menu-toggle').click(function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass('sb-active');
    return false;
  });

  new ScrollFix($('.sb-sidebar')[0]);
});
