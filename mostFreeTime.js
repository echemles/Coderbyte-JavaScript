function MostFreeTime(strArr) { 
  function minsArr(str) {
    str = str.split('-');
    var time1 = str[0], time2 = str[1];
    function toMins(x) {
      if (x.length === 6) x = '0' + x;
      var mins = Number(x.slice(3,5)) + Number(x.slice(0,2))*60;
      if (x.slice(0,2) === '12' && x[5] === 'A') mins -= 720;
      if (x[5]==='P' && x.slice(0,2) !== '12') mins += 720;
      return mins;
    }
    var mins1 = toMins(time1), mins2 = toMins(time2);
    return [mins1, mins2];
  }
  var timeDiffs = strArr.map(function(time){return minsArr(time)})
  timeDiffs.sort(function(a,b){return a[0]-b[0]});
  for(var i=0, breaks = []; i<timeDiffs.length-1; i++){
    if (timeDiffs[i+1][0]>timeDiffs[i][1]) breaks.push(timeDiffs[i+1][0]-timeDiffs[i][1])
  }
  var maxBreak = Math.max(...breaks), 
      hr = (Math.floor(maxBreak/60)).toString(),
      min = (maxBreak%60).toString();
  if (hr.length === 1) hr = '0' + hr;
  if (min.length === 1) min = '0' + min;
  return hr + ':' + min;
}