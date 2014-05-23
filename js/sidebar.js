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

  $('.sb-sidebar .group').each(function(index){
    jThis = $(this)
    this.innerHTML = '<div class="group-title"><img class="icon" src="'+jThis.attr('icon')+'"><p class="string">'+jThis.attr('string')+'</p><img class="arrowdown" src="icons/arrowdown.png"><div class="rightbar"></div></div>' + this.innerHTML;
  })
  $('.sb-sidebar .group-item').each(function(index){
    jThis = $(this);
    this.innerHTML = '<img src="icons/dot.png"><p class="string">'+jThis.attr('string')+'</p>';
    jThis.on('tap', tapToShowPage);
  })
  new ScrollIWant('.groups', false, true);
  $('.sb-sidebar .group-title').each(function(index) {
    jThis = $(this);
    jThisP = $(this.parentElement);
    jThis.on('tap', function(e) {
      jThis = $(this.parentElement);
      jThis.toggleClass('group-active');
      setTimeout( function() {
        jThis[0].scrollIntoViewIfNeeded(false);
      }, 300);
      e.preventDefault();
      return false;
    });
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
