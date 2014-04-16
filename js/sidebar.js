$(window).load( function () {
  $('.sb-content').on('tap', function(e) {
    if ($('#wrapper').hasClass('sb-active')) {
      e.preventDefault();
      $('#wrapper').removeClass('sb-active');
      return false;
    }
  });

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

});
