function OffLineMinimum(strArr) { 
  var str = strArr.join(''),
  	numEs = str.match(/E/g).length;
  str = str.replace(/E[0-9]*\b/,'');
  
  var nums = str.match(/[0-9]/g),
  	sorted = [],
       ans = [];
  
  for (var i=0; i<nums.length; i++){
    sorted.push(nums[i]);
  }
  sorted = sorted.sort().slice(0,numEs);
  return nums.filter(function(x){
    return sorted.indexOf(x) !== -1;
  }).toString();
}