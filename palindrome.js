function Palindrome(str) { 
  var rev = str.replace(/ /g, '').split('').reverse().join('');
  str = str.replace(/ /g, '');
  if (rev == str){return true;}
  else {return false;}
};