$(window).load( function () {
  $('.hotkey').on('tap', tapToShowPage);
  new OnPress('.hotkey');

  new OnPress('.visit-block');
  $('.visit-block').on('tap', function(e) {
    //console.log($(this).attr('url'));
    window.location=$(this).attr('url');
  });
  
});
