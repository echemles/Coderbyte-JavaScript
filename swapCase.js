function SwapCase(str) {
  str = str.split('').map(function(x){
    if (x.match(/[a-z]/)) return x.toUpperCase()
    else if (x.match(/[A-Z]/)) return x.toLowerCase()
    else return x;
  })
  return str.join('');
}