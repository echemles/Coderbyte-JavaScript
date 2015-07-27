function NumberAddition(str) {
  str = str.replace(/[^0-9]+/g, ' ').split(' ');
  return str.reduce(function(x,y){return Number(x) + Number(y)});
}