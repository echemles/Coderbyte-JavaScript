function FormattedDivision(num1,num2) {
  var division = num1/num2,
      addComma = function(x){return x + ','};
  division = Math.round(division * 10000) / 10000;
  division = division.toString().split('.');
  division[0] = division[0].split('').reverse().join('').replace(/.../g, addComma);
  division[0] = division[0].split('').reverse().join('').replace(/^,/, '');
  return division.join('.');
}