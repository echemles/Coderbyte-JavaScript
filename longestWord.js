function LongestWord(sen) {
  sen = sen.split(" ");
  var longest = "";
  function lengthCalc(word){
    return word.split("").length;
  } 
  for(var i = 0; i < sen.length; i++){
    sen[i] = sen[i].replace(/[^a-zA-z0-9]/g, '');
    if ( lengthCalc(sen[i]) > lengthCalc(longest)){longest = sen[i];}
  }
  return longest;
}