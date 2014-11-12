/********************************************************************
Pan Asia MUN Mobile Web APPS


<copyright file="AuthenticationType.cs" company="Pan Asia MUN">
Copyright (c) 2014 All Right Reserved, http://panasiamun.com//

THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY 
KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
PARTICULAR PURPOSE.

</copyright>
<author>Kuo, Chia-Han</author>
<email>ChiaHan.Kuo@gmail.com</email>
<date>2014-11-13</date>

*********************************************************************/
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
