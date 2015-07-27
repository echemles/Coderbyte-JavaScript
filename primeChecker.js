function PrimeChecker(num) {
  function shuffle(num) {
    var array = num.toString().split(''),
        currentIndex = array.length, temporaryValue, randomIndex ;
    while (0 !== currentIndex) {
        randomIndex = Math.round(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array.join('');
  }
  
  function factorial(num) {
    for(var i=1, product = 1; i<=num; i++) {
      product *= i;
    }
    return product
  }
  
  var uniqueNumbers = [], anyPrime = 0;
  
  num.toString().split('').forEach(function(x){
    if(uniqueNumbers.indexOf(x) === -1) uniqueNumbers.push(x);
  })
  
  var possibleCombinations = (factorial(uniqueNumbers.length)/(factorial(num.length)*factorial( uniqueNumbers.length - num.length)))
    
  for(var combinations = [], newNum; combinations.length<possibleCombinations;) {
    newNum = shuffle(num)  
    if(combinations.indexOf(Number(newNum)) === -1) combinations.push(Number(newNum))
  }
  
  
  combinations.forEach(function(x){
    for(var i = 2, isPrime = true; i < x; i++) {
        if(x % i === 0) isPrime = false;
    }
    if (isPrime === true && x > 2) anyPrime = 1;
  })
  return anyPrime;
}