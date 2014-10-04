$(function () {
  new OnPress('#goback');
  $('#goback').on('tap', function(e) {
    e.preventDefault();
    window.history.back();
    return false;
  });

});
