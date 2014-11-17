/********************************************************************
Pan Asia MUN Mobile Web APPS


<copyright file="countdown.js" company="Pan Asia MUN">
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
  today = new Date();
  PAMUNday = new Date(2014, 11, 4, 10, 30, 0, 0);
  //PAMUNday = new Date(2014, 10, 9, 10, 30, 0, 0);
  timeLeft = (PAMUNday.getTime() - today.getTime())/86400000;
  daysLeft = Math.floor(timeLeft);
  if(daysLeft >= 1) {
    $('#countdown-frame').html('<div id="countdown-day-number">'+daysLeft+'</div><div id="countdown-day-unit"></div>');
    return;
  }
  timeLeft = (timeLeft-daysLeft)*24;
  hourLeft = Math.floor(timeLeft);
  timeLeft = (timeLeft-hourLeft)*60;
  minuteLeft = Math.floor(timeLeft);
  timeLeft = (timeLeft-minuteLeft)*60;
  secondLeft = Math.floor(timeLeft);
  timeLeft = (timeLeft-secondLeft)*60;
  millisecondLeft = Math.floor(timeLeft);

});
