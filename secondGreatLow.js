function SecondGreatLow(arr) {
  arr = arr.sort(function(x,y){return x-y});
  return arr[1] + ' ' + arr[arr.length-2];
}