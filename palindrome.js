function Palindrome(str) {
  str = str.replace(/[^A-Za-z]/g,'').toLowerCase();
  return str.split('').reverse().join('') === str;
}