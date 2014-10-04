$(function () {
  //$(document).on('touchmove', function(e) { e.preventDefault();});
  $('.sb-content').on('tap', function(e) {
    if ($('#wrapper').hasClass('sb-active')) {
      e.preventDefault();
      $('#wrapper').removeClass('sb-active');
      return false;
    }
    return true;
  });

  $('#menu-toggle').on('tap', function(e) {
    e.preventDefault();
    $('#wrapper').addClass('sb-active');
    return false;
  });

  $('.hide-sidebar').on('tap', function(e) {
    e.preventDefault();
    $('#wrapper').removeClass('sb-active');
    return false;
  });

  new OnPress('.sb-sidebar #homepage');
  new OnPress('.hide-sidebar');
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
  new OnPress('.sb-sidebar .group-item');

  new OnPress('#menu-toggle');

  //window.scrollTo(0,1);
});
