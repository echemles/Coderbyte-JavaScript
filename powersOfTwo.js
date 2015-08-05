function PowersofTwo(num) {
  var powsofTwo = [], i=1, x=0;
  while(x<num){
    x = Math.pow(2,i)
    powsofTwo.push(x);
    i++;
  }
  return powsofTwo.indexOf(num) === -1 ? false:true;
}