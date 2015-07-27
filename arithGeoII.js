function ArithGeoII(arr) {
  var arith = true, geo = true, i = 0;
  for (i=1; i<arr.length-1; i++) {
    if (arr[i] - arr[i-1] !== arr[i+1] - arr[i]) {arith = false};
    if (arr[i] / arr[i-1] !== arr[i+1] / arr[i]) {geo = false};
  };
  if (arith === true) { 
    return "Arithmetic"
  } else if (geo === true) {
    return "Geometric"
  } else {
    return -1;
  }
}