var SCREEN_RATIO = Math.min($(window).width(), $(window).height())/180;

scale = function(design) { 
  return SCREEN_RATIO*design; 
};

OnPress = function(eSel) {
  jThis = $(eSel);
  jThis.on('touchstart', function(e) { $(this).addClass('onpress'); });
  jThis.on('touchmove', function(e) { $(this).removeClass('onpress'); });
  jThis.on('touchend', function(e) { $(this).removeClass('onpress'); });
}
