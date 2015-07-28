function LookSaySequence(num) {
  var str = num.toString();
  if (str.length === 1) return '1' + str;
  for (var i=0, counter = 0, currentNum, answer = []; i<str.length; i++){
    if (i === 0) {
      currentNum = str[i];
      counter += 1;
    } else if (str[i] === currentNum){
      counter += 1;
    } else {
      answer.push(counter + str[i-1]);
      counter = 1;
      currentNum = str[i];
    }
    if (i === str.length - 1) answer.push(counter + currentNum)
  }
  return answer.join('');
}