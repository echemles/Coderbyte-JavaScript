function StringScramble(str1,str2) {
  str1 = str1.split('');
  str2 = str2.split('');
  var answer = true;
  str2.forEach(function(x){
    if (str1.indexOf(x) === -1) answer = false;
    str1.splice(str1.indexOf(x),1);
  })
  return answer;
}