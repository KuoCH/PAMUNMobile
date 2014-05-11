OnPress = function(eSel) {
  jThis = $(eSel);
  jThis.on('touchstart', function(e) { $(this).addClass('onpress'); });
  jThis.on('touchmove', function(e) { $(this).removeClass('onpress'); });
  jThis.on('touchend', function(e) { $(this).removeClass('onpress'); });
}
