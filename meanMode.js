function MeanMode(arr) {
  var mean = arr.reduce(function(a,b){return a+b})/arr.length,
      counter = {}, count = [], mode;
  arr.forEach(function(num){
    if (counter[num] === undefined) counter[num] = 0;
    counter[num] += 1;
  })
  for (var n in counter) {
    count.push([n, counter[n]]);
  }
  count = count.sort(function(a,b){return b[1]-a[1]})
  mode = Number(count[0][0])
  return mode === mean ? 1:0;
}