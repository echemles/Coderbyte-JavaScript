function CountingMinutesI(str) {
  str = str.split('-');
  var time1 = str[0], time2 = str[1];
  function toMins(x) {
    if (x.length === 6) x = '0' + x;
    var mins = Number(x.slice(3,5)) + Number(x.slice(0,2))*60;
    if (x.slice(0,2) === '12' && x[5] === 'a') mins -= 720;
    if (x[5]==='p' && x.slice(0,2) !== '12') mins += 720;
    return mins;
  }
  var mins1 = toMins(time1), mins2 = toMins(time2);
  if (mins2 - mins1 < 0) mins2 += 1440;
  return mins2 - mins1;
}


