/********************************************************************
Pan Asia MUN Mobile Web APPS


<copyright file="dialog.js" company="Pan Asia MUN">
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
function closeDialog() {
  $('#dialog-box').animate({'top': '-100%'},200,function() { //box out
    $('#dialog-cover').fadeOut(200, function() {
      $('#dialog-showing-content').html('');
    });
  });
  return false;
}

function openDialog() {
  //window.location.hash="dialog";
  $('#dialog-showing-content').html($(this).children('.dialog-content').html());
  $('#dialog-cover').fadeIn(200, function() {
    $('#dialog-box').animate({'top': '10%'}, 200);
  });
  return false;
}

$(function () {
  document.body.innerHTML += '<div id="dialog"><div id="dialog-cover" style="display:none;"></div> <div id="dialog-box"><a id="dialog-box-close"></a><div id="dialog-showing-content"></div></div>';
  $('.dialog-activator').click(openDialog);
  $('#dialog-box-close').click(closeDialog);
  $('#dialog-cover').click(closeDialog);
  
});
