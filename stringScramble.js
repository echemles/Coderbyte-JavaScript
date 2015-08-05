function StringScramble(str1,str2) {
  str1 = str1.split('');
  for(var i = 0; i<str2.length; i++){
    if(str1.indexOf(str2[i]) !== -1) 
      str1.splice(str1.indexOf(str2[i]),1);
    else return false;
  }
  return true;
}