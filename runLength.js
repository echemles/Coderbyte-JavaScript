function RunLength(str) {
  if (str.length===1)  return 1+str;
  var counter = 1, current = str[0],
      answer = [];
  for (var i=1; i<str.length; i++){
    if (current === str[i]) counter +=1;
    else {
      answer.push(counter,current)
      counter = 1; 
      current = str[i];
    }
    if(i === str.length - 1) answer.push(counter,current);
  }
  return answer.join('');
}