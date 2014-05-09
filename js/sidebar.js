$(window).load( function () {
  $(document).bind('touchmove', function(e) { e.preventDefault();});
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
    $('#wrapper').toggleClass('sb-active');
    return false;
  });


  $('.sb-sidebar .group').each(function(index){
    jThis = $(this)
    this.innerHTML = '<div class="group-title"><img src="'+jThis.attr('icon')+'"><p class="string">'+jThis.attr('string')+'</p></div>' + this.innerHTML;
  })
  $('.sb-sidebar .group-item').each(function(index){
    jThis = $(this)
    this.innerHTML = '<img src="'+jThis.attr('icon')+'"><p class="string">'+jThis.attr('string')+'</p>';
    jThis.on('tap', function(e) {
      showPage($(this).attr('pageId'));
    });
  })
  new ScrollIWant('.groups', false, true);
});
