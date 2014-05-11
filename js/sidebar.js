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
    $('#wrapper').removeClass('sb-active');
    return false;
  });

  $('.sb-sidebar .homepage').on('tap', showPage);
  new OnPress('.sb-sidebar .homepage');

  $('.sb-sidebar .group').each(function(index){
    jThis = $(this)
    this.innerHTML = '<div class="group-title"><img class="icon" src="'+jThis.attr('icon')+'"><p class="string">'+jThis.attr('string')+'</p><img class="arrowdown" src="icons/arrowdown.png"><div class="rightbar"></div></div>' + this.innerHTML;
  })
  $('.sb-sidebar .group-item').each(function(index){
    jThis = $(this);
    this.innerHTML = '<img src="'+jThis.attr('icon')+'"><p class="string">'+jThis.attr('string')+'</p>';
    jThis.on('tap', showPage);
  })
  new ScrollIWant('.groups', false, true);
  $('.sb-sidebar .group-title').each(function(index) {
    jThis = $(this);
    jThisP = $(this.parentElement);
    if(jThisP.attr('pageId')){
      jThisP.on('tap', showPage);
      jThisP.addClass('group-active');
    } else { 
      jThis.on('tap', function(e) {
        $(this.parentElement).toggleClass('group-active');
        return false;
      });
    }
  });
  new OnPress('.sb-sidebar .group-title');
  $('.sb-sidebar .groups-wrapper').on('tap', function(e) {
    $('#wrapper').removeClass('sb-active');
    return false;
  });
  new OnPress('.sb-sidebar .group-item');
  window.scrollTo(0,1);
});
