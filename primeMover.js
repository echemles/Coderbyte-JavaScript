function PrimeMover(num) {
  for (var i=2, j, isPrime, primes = []; primes.length<num; i++){
    isPrime = true;
    for(j=2; j<i; j++){
      if(i%j === 0) isPrime = false;
    }
    if (isPrime === true) primes.push(i);
  }
  return primes.pop();
}