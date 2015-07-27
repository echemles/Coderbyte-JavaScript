function CaesarCipher(str,num) {
  var alph = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ',
      ciphered = [];
  str.split('').forEach(function(x){
    if (x.match(/[A-Za-z]/)) ciphered.push(alph[alph.indexOf(x)+num])
    else ciphered.push(x);
  })
  return ciphered.join('');
}