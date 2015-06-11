function AdditivePersistence(num) {
  var counter = 0;
  function add(x,y){return Number(x) + Number(y)};
  num = num.toString();
  while (num.length > 1){
    counter += 1;
  	num = String(num).split('').reduce(add)
    num = num.toString();
  }
  return counter;
}