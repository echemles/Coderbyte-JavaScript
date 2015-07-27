function LetterCountI(str) {
  str = str.split(' ');
  var counts = [];
  str.forEach(function(x){
    var y = new Object(),
        letterCount = [];
    x.split('').forEach(function(z){
      if (y[z] === undefined) y[z] = 0;
      y[z] += 1;
    });
    for (var key in y) {
      if (y[key] !== 1) letterCount.push(y[key])
    };
    counts.push(letterCount.sort().reverse())
  });
  for (var i=0, greatest=[], greatestIndex; i<counts.length; i++) {
    if (counts[i] > greatest) { 
      greatest = counts[i];
      greatestIndex = i;
    }
  }
  if (greatest == false) return -1;
  return str[greatestIndex];
}