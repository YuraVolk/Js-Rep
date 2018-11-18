'use strict';

function getWeekDay(date) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    return (days[date.getDay()]);
  }
  
  function testDateTime(a, b) {
      var DateA = new Date();
      var DateB = new Date();
      DateA.setTime (Date.parse (a));
      DateB.setTime (Date.parse (b));
      if (DateA > DateB) {
         alert (getWeekDay(DateA));   
      } else {
         alert (getWeekDay(DateB));
      }
  }
  
testDateTime("24 January 1909 08:35", "21 May 1909 11:40")