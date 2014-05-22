$(window).load( function () {
  $('.hotkey').on('tap', tapToShowPage);
  new OnPress('.hotkey');
  window.scrollTo(0, 1);
});
