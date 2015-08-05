function DistinctList(arr) {
  var unique = [], counter=0;
  arr.forEach(function(num){
    if(unique.indexOf(num) === -1) unique.push(num);
    else counter +=1;
  })
  return counter;
}
   