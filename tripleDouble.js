function TripleDouble(num1,num2) { 
  var tripleMatches = [], doubleMatches = [], answer = false;
  tripleMatches = num1.toString().match(/000|111|222|333|444|555|666|777|888|999/g).join('');
  doubleMatches = num2.toString().match(/00|11|22|33|44|55|66|77|88|99/g).join('');
  doubleMatches.split('').forEach(function(x){
    if (tripleMatches.indexOf(x) !== -1) answer = true;
  })
  return answer === true ? 1:0;
}