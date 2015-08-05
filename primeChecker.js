function PrimeChecker(num) {
  num = num.toString().split('');
  var uniqueNums = [], combos = [], random;
  function shuffle(n) {
        var currentIndex = n.length, temporaryValue, randomIndex ;
    while (0 !== currentIndex) {
        randomIndex = Math.round(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = n[currentIndex];
        n[currentIndex] = n[randomIndex];
        n[randomIndex] = temporaryValue;
    }
    return n.join('');
  }
  num.forEach(function(n){
    if(uniqueNums.indexOf(n) === -1) uniqueNums.push(n)
  })
  var possibleCombos = uniqueNums.length === 1? 1: num.length*(uniqueNums.length - 1);
  while(combos.length < possibleCombos){
    random = shuffle(num)
    if (combos.indexOf(random) === -1) combos.push(random);
  }
  function isPrime(n){
    for(var i=2; i<n; i++) if(n%i===0) return false;
    if (n>1) return true;
  }
  return combos.some(isPrime) === true? 1:0;
}