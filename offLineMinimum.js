function OffLineMinimum(strArr) {
  var newArr = [], answer = [];
  strArr.forEach(function(char){
    if(char !== 'E') newArr.push(char)
    else{
      answer.push(newArr.sort().shift());
    }
  })
  return answer.toString();
}