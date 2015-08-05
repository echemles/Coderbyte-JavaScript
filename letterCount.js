function LetterCount(str) {
  var words, repsObj, repsArr, repsArr2 = [], maxArr = [], maxIndex, i;
  words = str.toLowerCase().replace(/[^A-Za-z\s]/g,'').split(' ');
  words.forEach(function(word){
    repsObj = {};
    repsArr = [];
    word.split('').forEach(function(letter){
      if (repsObj[letter] === undefined) repsObj[letter] = 0;
      repsObj[letter] += 1;
    });
    for(var rep in repsObj){
      if (repsObj[rep] > 1) repsArr.push(repsObj[rep]);
    }
    repsArr2.push(repsArr.sort(function(a,b){return b-a}));
  });
  for (i=0;i<repsArr2.length;i++){
    if (repsArr2[i]>maxArr){
      maxArr = repsArr2[i];
      maxIndex = i;
    }
  }
  return maxIndex !== undefined ? words[maxIndex] : -1;
}