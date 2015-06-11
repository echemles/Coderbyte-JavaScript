function PowersofTwo(num) {
  for (var i=1, twoPow=[]; i<99; i++){
    twoPow.push(Math.pow(2,i));
  }
  return twoPow.indexOf(num) === -1 ? false : true;    
}