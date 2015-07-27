function Division(num1,num2) {
  var i=1, commonFactors = [];
  for (;i<=Math.max(num1,num2);i++){
    if (num1%i===0 && num2%i===0) commonFactors.push(i);
  }
  return Math.max(...commonFactors);
}