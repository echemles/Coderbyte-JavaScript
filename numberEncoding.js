function NumberEncoding(str) {
  var alph = 'abcdefghijklmnopqrstuvwxyz',
      newStr = [];
  str.split('').forEach(function(x){
    if (alph.indexOf(x) !== -1) newStr.push(alph.indexOf(x) + 1);
    else newStr.push(x);
  })
  return newStr.join('');
}
   