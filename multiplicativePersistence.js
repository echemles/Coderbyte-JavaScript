function MultiplicativePersistence(num) {
  var count = 0, 
      multiply = function(x,y){return Number(x)*Number(y)};
  while (num >= 10) {
    count += 1;
    num = num.toString().split('').reduce(multiply);
  }
  return count;
}