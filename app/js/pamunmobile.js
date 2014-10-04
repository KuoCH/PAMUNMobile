$(function () {
  new OnPress('.hotkey');

  new OnPress('.visit-block');
  $.each(document.images, function(){
    var this_image = this;
    // Replace src with bsrc by the command:
    // %s/\(img[^>]* \)src/\1bsrc/g
    // Then:
    /*
    var src = $(this_image).attr('bsrc') || '' ;
    if(src.length > 0){
      //this_image.src = src;
      $(this_image).attr('src', 'data:image/png;base64,'+icons[src]);
    } else {
    */
    var src = $(this_image).attr('src') || '' ;
    if(!src.length > 0){
      this_image.src = 'icons/logo_blue.png'; // show loading
      var lsrc = $(this_image).attr('lsrc') || '' ;
      if(lsrc.length > 0){
        var img = new Image();
        img.src = lsrc;
        $(img).load(function() {
          this_image.src = this.src;
        });
      }
    }
  });
  
/*
  */
});
