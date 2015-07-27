function SwapII(str) {
  var answer = [],
      swapNums = function(x){
        if (x.length > 3) return x[x.length-1] + x.slice(1,x.length-1) + x[0];
        else return x[2] + x[1] + x[0];
      };
  str = str.split('').map(function(x){
    if (x.match(/[a-z]/)) return x.toUpperCase()
    else if (x.match(/[A-Z]/)) return x.toLowerCase()
    else return x;
  });
  return str.join('').replace(/[0-9][A-z][A-z]*[0-9]/g, swapNums);
}