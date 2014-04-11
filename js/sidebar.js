$(window).load( function () {
  $('.sb-content').on('tap', function() {
    if ($('#wrapper').hasClass('sb-active')) $('#wrapper').removeClass('sb-active');
  });

  $('.menu-toggle').click(function(e) {
    e.preventDefault();
    $('#wrapper').toggleClass('sb-active');
    return false;
  });

});
