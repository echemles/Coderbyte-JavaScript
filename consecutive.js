function Consecutive(arr) {
  var min=Math.min(...arr), max=Math.max(...arr),
      count=0, i=min;
  while(i<max){
    if(arr.indexOf(i) === -1) count+=1;
    i++;
  }
  return count;
}