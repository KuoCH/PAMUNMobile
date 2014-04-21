$(window).load( function () {
  $('.sb-content').on('tap', function(e) {
    if ($('#wrapper').hasClass('sb-active')) {
      e.preventDefault();
      $('#wrapper').removeClass('sb-active');
      return false;
    }
  });

  $.event.special.swipe.scrollSupressionThreshold = 150;
  $.event.special.swipe.horizontalDistanceThreshold = 150;
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

  //Prevent the bounce on whole document, which disable scroll of child node.
  document.ontouchmove = function(e) {e.preventDefault();return true;};
  $('.sb-sidebar')[0].ontouchmove = function(e) {e.stopPropagation();};
  $('.sb-content')[0].ontouchmove = function(e) {e.stopPropagation();};
});
