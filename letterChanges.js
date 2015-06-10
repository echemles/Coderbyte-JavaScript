function LetterChanges(str) { 
  var a1 = "abcdefghijklmnopqrstuvwxyz";
  var a2 = "bcdEfghIjklmnOpqrstUvwxyzA";
  str = str.split('');
  var answer = "";
    
  for (i = 0, x = str.length; i < x; i++) {
      if (a1.indexOf(str[i]) !== -1) {
          answer += a2.charAt(a1.indexOf(str[i]));
      } else {
          answer += str[i];
      }
  }
    
  return answer;
}
      
