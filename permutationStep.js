  function PermutationStep(num) {
    if (num.toString().split('').sort().reverse().join('') === num.toString()) return -1;
    function sorted(x){return x.toString().split('').sort().join('');}
    for (var i = num+1; ; i++) {
      if (sorted(num) === sorted(i)) return i;
    }
  }