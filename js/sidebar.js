$(window).load( function () {
  //$(document).on('touchmove', function(e) { e.preventDefault();});
  $('.sb-content').on('tap', function(e) {
    if ($('#wrapper').hasClass('sb-active')) {
      e.preventDefault();
      $('#wrapper').removeClass('sb-active');
      return false;
    }
    return true;
  });

  $('.menu-toggle').on('tap', function(e) {
    e.preventDefault();
    $('#wrapper').addClass('sb-active');
    return false;
  });

  $('.hide-sidebar').on('tap', function(e) {
    e.preventDefault();
    $('#wrapper').removeClass('sb-active');
    return false;
  });

  $('.sb-sidebar .homepage').on('tap', tapToShowPage);
  new OnPress('.sb-sidebar .homepage');
  new OnPress('.hide-sidebar');
  $('.sb-sidebar .group-item').on('tap', tapToShowPage);
  $('.sb-sidebar .group-title').on('tap', function(e) {
      jThis = $(this.parentElement);
      jThis.toggleClass('group-active');
      setTimeout( function() {
        jThis[0].scrollIntoViewIfNeeded(false);
      }, 300);
      e.preventDefault();
      return false;
  });
  new OnPress('.sb-sidebar .group-title');
  $('.sb-sidebar .groups-wrapper').on('tap', function(e) {
      $('#wrapper').toggleClass('sb-active');
    e.preventDefault();
    return false;
  });
  new OnPress('.sb-sidebar .group-item');

  new OnPress('.menu-toggle');

  //window.scrollTo(0,1);
});

tapToShowPage = function(e) {
  $('#wrapper').removeClass('sb-active');
  targetId = $(this).attr('pageId');
  if ( window.location.hash != targetId && window.location.hash != '#' + targetId) {
    window.location.hash = targetId;
  } else { 
    if ($('#wrapper').hasClass('sb-active')) {
      $('#wrapper').removeClass('sb-active');
    }
  }
  e.preventDefault();
  return false;
};
