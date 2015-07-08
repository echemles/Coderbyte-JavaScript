function CountingMinutesI(str) { 
  str = str.replace(/[-]/, ' ').split(' ');
  
//declare var
  var time1 = str[0],
      time2 = str[1];
  
//add zero
  if (time1.length === 6){time1 = time1.replace(/\b/, '0');}
  if (time2.length === 6){time2 = time2.replace(/\b/, '0');}
  
//function to change to mins
  function toMins(str1) {
    var l = str1.length,
        mins = 0;
    mins += Number(str1[l-4]+str1[l-3]);
    mins += Number(str1[l-7]+str1[l-6])*60;
    if (str1[l-2] === 'p') mins += 720;
    return mins;
  }
  
//process functions
  var mins1 = toMins(time1),
      mins2 = toMins(time2);

//conditionals
  if (time2[time2.length-2] === 'a' && 
      time1[time1.length-2] === 'p') {
    mins2 += 1440;
  }
  
  if (mins2-mins1 < 0) mins2 += 1440;
//evaluate
  return mins2-mins1;
}        
