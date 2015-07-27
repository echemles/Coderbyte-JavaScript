function Consecutive(arr) { 
  var min = Math.min(...arr),
      max = Math.max(...arr),
      missing = [], i = min + 1;
  for (;i<max;i++){
    if(arr.indexOf(i) === -1) missing.push(i);
  }
  return missing.length;
}