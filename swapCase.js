function SwapCase(str) {
  str = str.split('');
  for (var i=0, newStr=[]; i<str.length; i++){
    var l = str[i]
    if (l.match(/[a-z]/)){
      newStr.push(l.toUpperCase());
    } else if (l.match(/[A-Z]/)){
      newStr.push(l.toLowerCase());
    } else {
      newStr.push(l);
    }
  }
  return newStr.join('');
}