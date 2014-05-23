//Only implement y-direction for now

var ScrollIWant = function(eSel, x, y) {
  return;
  // Variables to track inputs
  var originY = originX = 0;
  var originScrollTop = originScrollLeft = 0;
  var maxScrollTop = 0;
  var didScroll = false;

  if (!y) {
    console.warn('Didn\'t set direction for elem:'+eSel);
    return;
  }


  elem = $(eSel);
  // Handle the start of interactions
  elem.on('touchstart', function(event){
    originY = event.originalEvent.touches[0].pageY;
    originScrollTop = this.scrollTop;
    maxScrollTop = this.scrollHeight - this.offsetHeight;
  });
  elem.on('touchmove', function(event){
    nowY = event.originalEvent.touches[0].pageY;
    newScrollTop = originScrollTop - nowY + originY;
    if ( newScrollTop > maxScrollTop ) {
      newScrollTop = maxScrollTop;
      originY = nowY + maxScrollTop;
      originScrollTop = 0;
    }else if ( newScrollTop < 0 ) {
      newScrollTop = 0;
      originY = nowY;
      originScrollTop = 0;
    }
    this.scrollTop = newScrollTop;
    didScroll = true;
  });
  elem.on('touchend', function(event){
    if (didScroll) {
      didScroll = false;
      return false;
    }
  });
};
