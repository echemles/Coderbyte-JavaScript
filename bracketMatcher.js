function BracketMatcher(str) { 
  if (str.match(/^\)|\($/) !== null) return 0;
  str = str.replace(/\([^()]+\) | \(\)/g,'').replace(/\([^()]+\)|\(\)/g,'');
  str = str.replace(/\([^()]+\) | \(\)/g,'').replace(/\([^()]+\)|\(\)/g,'');
  if (str.match(/[()]/) === null) return 1;
  return 0;
}