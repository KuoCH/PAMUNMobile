var sidebarLeft=0;
var lastDelta=0;
var originX;
$(window).load( function () {
  $('.sb-content').on('tap', function(e) {
    if ($('#wrapper').hasClass('sb-active')) {
      e.preventDefault();
      $('#wrapper').removeClass('sb-active').addClass('sb-hide');
      return false;
    }
  });

  var wrapperElement = $('#wrapper')[0];
  wrapperElement.addEventListener( 'touchstart', function(event) { 
    if ($('#wrapper').hasClass('sb-active')) {
      $('#wrapper').addClass('sb-drag').removeClass('sb-active');
      originX = event.pageX;
    }
  });
  wrapperElement.addEventListener( 'touchmove', function(event) { 
    if ($('#wrapper').hasClass('sb-drag')) {
      lastDelta=event.pageX - originX;
      sidebarLeft += lastDelta;
      originX = event.pageX;
      if(lastDelta != 0) {
        $('#wrapper.sb-drag .sb-sidebar').css('left', sidebarLeft);
      }
    }
  });
  wrapperElement.addEventListener( 'touchend', function(event) { 
    if ($('#wrapper').hasClass('sb-drag')) {
      $('#wrapper.sb-drag .sb-sidebar').css('left', '');
      sidebarLeft=0;
      $('#wrapper').addClass('sb-active').removeClass('sb-drag');
    }
  });
  /*
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
     */

  $('.menu-toggle').click(function(e) {
    e.preventDefault();
    if ($('#wrapper').hasClass('sb-hide')) {
      e.preventDefault();
      $('#wrapper').removeClass('sb-hide').addClass('sb-active');
      return false;
    }
  });

  new ScrollFix($('.sb-sidebar')[0]);
});
