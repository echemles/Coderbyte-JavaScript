function PrimeTime(num) {   
  for(var i=2, j=2; i<num; i++){
    for( ; j<num; j++){
      if (j*i === num) return false;
    }
  }
  return true;
}