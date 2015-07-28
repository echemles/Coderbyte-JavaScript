function MultipleBrackets(str) {
  var leftBracket = 0, rightBracket = 0, 
      lBracket = 0, rBracket = 0, 
      unMatched = false;
  str.split('').forEach(function(x){
    if (x=='(') leftBracket += 1;
    if (x==')') rightBracket += 1;
    if (x=='[') lBracket += 1;
    if (x==']') rBracket += 1;
    if (rightBracket > leftBracket || rBracket > lBracket) unMatched = true;
  })
  if (rightBracket !== leftBracket || rBracket !== lBracket || unMatched === true) return 0;
  if (lBracket === 0 && leftBracket === 0) return 1;
  return "1 " + (lBracket + leftBracket);
}