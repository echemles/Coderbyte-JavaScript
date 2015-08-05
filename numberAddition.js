function NumberAddition(str) {
  var nums = str.match(/[0-9]+/g);
  if (nums === null) return 0;
  return nums.reduce(function(sum, num) {return Number(sum) + Number(num)});
}