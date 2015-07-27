function AdditivePersistence(num) {
  var count = 0, 
  	  add = function(x,y){return Number(x) + Number(y)};
  while (num >= 10) {
    count += 1;
    num = num.toString().split('').reduce(add);
  }
  return count;
}