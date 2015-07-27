function SimpleMode(arr) {
  var freqs = new Object, maxFreq = 0, mode = null;
  arr.forEach(function(x) {
    if (freqs[x] === undefined) freqs[x] = 1
    else freqs[x] += 1;
  });
  arr.forEach(function(x){
    if (maxFreq < freqs[x]) {
      mode = x; maxFreq = freqs[x];   
    };
  });
  if (maxFreq < 2) return -1;
  return mode;
}