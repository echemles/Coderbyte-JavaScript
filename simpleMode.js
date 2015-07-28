function SimpleMode(arr) {
  var counter = {}, count = [];
  arr.forEach(function(x){
    if (counter[x] === undefined) counter[x] = 0;
    counter[x] += 1;
  })
  for (var num in counter) count.push([num, counter[num]]);
  count = count.sort(function(a,b){return b[1] - a[1];})
  if (count[0][1] === 1) return -1;
  return count[0][0];
}