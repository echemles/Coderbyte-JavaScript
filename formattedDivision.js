function FormattedDivision(num1,num2) {
  var quo = (num1/num2).toFixed(4).split('.'),
      addComma = function(str){return str+','};
  quo[0] = quo[0].split('').reverse().join('').replace(/...(?!$)/g, addComma).split('').reverse().join('');
  return quo.join('.');
}