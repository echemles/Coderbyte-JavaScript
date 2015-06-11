function Palindrome(str) {
  var newString = str.replace(/\s/g, ''),
      reverseString = newString.split('').reverse().join('');
  return newString === reverseString;
}