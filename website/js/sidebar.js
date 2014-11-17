/********************************************************************
Pan Asia MUN Mobile Web APPS


<copyright file="sidebar.js" company="Pan Asia MUN">
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
$(function () {
  //$(document).on('touchmove', function(e) { e.preventDefault();});
  $('.sb-content').on('tap', function(e) {
    if ($('#wrapper').hasClass('sb-active')) {
      e.preventDefault();
      $('#wrapper').removeClass('sb-active');
      return false;
    }
    return true;
  });

  $('#menu-toggle').on('tap', function(e) {
    e.preventDefault();
    $('#wrapper').addClass('sb-active');
    return false;
  });

  $('.hide-sidebar').on('tap', function(e) {
    e.preventDefault();
    $('#wrapper').removeClass('sb-active');
    return false;
  });

  new OnPress('.sb-sidebar #homepage');
  new OnPress('.hide-sidebar');
  $('.sb-sidebar .group-title').on('tap', function(e) {
      jThis = $(this.parentElement);
      jThis.toggleClass('group-active');
      setTimeout( function() {
        jThis[0].scrollIntoViewIfNeeded(false);
      }, 300);
      e.preventDefault();
      return false;
  });
  new OnPress('.sb-sidebar .group-title');
  new OnPress('.sb-sidebar .group-item');

  new OnPress('#menu-toggle');

  //window.scrollTo(0,1);
});
