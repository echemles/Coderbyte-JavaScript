function MultiplicativePersistence(num) {
  var counter = 0;
  function multiply(x,y) {return Number(x) * Number(y);}
  num = num.toString();
  while (num.length > 1) {
    counter += 1;
    num = num.split('').reduce(multiply);
    num = num.toString();
  }
  return counter;
}