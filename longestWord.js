function LongestWord(sen) {
  sen = sen.replace(/[^A-Za-z0-9\s]/g, '').split(' ');
  var longestWord = '';
  sen.forEach(function(word){
    longestWord = longestWord.length < word.length ? word : longestWord;
  });
  return longestWord;
}