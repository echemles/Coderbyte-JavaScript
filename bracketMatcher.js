function BracketMatcher(str) {
  var lefts = 0, rights = 0, unmatched = false;
  str.split('').forEach(function(x){
    if (x === '(') lefts += 1;
    else if (x === ')') rights += 1;
    if(lefts < rights) return unmatched = true;
  })
  if (unmatched === true) return 0;
  return rights === lefts ? 1:0;
}