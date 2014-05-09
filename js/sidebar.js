$(window).load( function () {
  $('.sb-content').on('tap', function(e) {
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

  $('.sb-sidebar .group').each(function(index){
    jThis = $(this)
    this.innerHTML = '<div class="group-title"><img src="'+jThis.attr('icon')+'"><p class="title-string">'+jThis.attr('string')+'</p></div>' + this.innerHTML;
  })
});
