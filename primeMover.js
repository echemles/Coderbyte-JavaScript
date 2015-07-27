function PrimeMover(num) {
  for(var list = [], x=2, i, j, isPrime; list.length<num; x++){
    isPrime = true;
    for (i=2; i<9999; i++){
      for (j=2;(i*j)<=x; j++){
        if (i*j === x){
          isPrime = false;
          break;
        }
      }
      if (i*j === x) break;
    }
    if (isPrime === true) list.push(x);
  };
  return list.pop();
}