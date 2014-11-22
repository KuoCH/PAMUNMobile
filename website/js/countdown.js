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
PAMUNday = new Date(2014, 11, 4, 10, 30, 0, 0);
/* Remember !!!!!!!!!!!!!!!!!!!!!!!!!!!! ****************************/
// FakePAMUNday = new Date(2014, 10, 23, 10, 30, 0, 0);
// PAMUNday = FakePAMUNday;
/* Remember !!!!!!!!!!!!!!!!!!!!!!!!!!!! ****************************/
$(function () {
  today = new Date();
  timeLeft = (PAMUNday.getTime() - today.getTime())/86400000;
  daysLeft = Math.floor(timeLeft);
  if(daysLeft >= 1) {
    $('#countdown-frame').html('<div id="countdown-day-number">'+daysLeft+'</div><div id="countdown-day-unit"></div>');
    return;
  }
  if(daysLeft >= 0) {
    countdownBySeconds();
    return;
  }

});

function countdownBySeconds() {
  today = new Date();
  timeLeft = (PAMUNday.getTime() - today.getTime())/86400000;
  daysLeft = Math.floor(timeLeft);
  timeLeft = (timeLeft-daysLeft)*24;
  hourLeft = Math.floor(timeLeft);
  timeLeft = (timeLeft-hourLeft)*60;
  minuteLeft = Math.floor(timeLeft);
  timeLeft = (timeLeft-minuteLeft)*60;
  secondLeft = Math.floor(timeLeft);
  timeLeftString = ''+((hourLeft>9)?hourLeft:('0'+hourLeft))+((minuteLeft>9)?minuteLeft:('0'+minuteLeft))+((secondLeft>9)?secondLeft:('0'+secondLeft))
    timeLeft = (timeLeft-secondLeft)*60;
  //millisecondLeft = Math.floor(timeLeft);
  $('#countdown-frame').html('<div id="countdown-time-text">Begins in</div><div id="countdown-time-number">'+timeLeftString[0]+'</div><div id="countdown-time-number">'+timeLeftString[1]+'</div><div id="countdown-colon">:</div><div id="countdown-time-number">'+timeLeftString[2]+'</div><div id="countdown-time-number">'+timeLeftString[3]+'</div><div id="countdown-colon">:</div><div id="countdown-time-number">'+timeLeftString[4]+'</div><div id="countdown-time-number">'+timeLeftString[5]+'</div>');
  $('#countdown-frame').addClass('count-hour');
  setTimeout(countdownBySeconds, 500);
}
