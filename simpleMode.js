function SimpleMode(arr) {
  var count = {}, max = 1, mode;
  arr.forEach(function(x){
    if (count[x] === undefined) count[x] = 0;
    count[x] += 1;
    if (count[x] > max) {
      mode = x;
      max = count[x];
    }
  })
  return max > 1 ? mode : -1;
}