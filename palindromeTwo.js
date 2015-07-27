function PalindromeTwo(str) {
  str = str.replace(/[\W]/g,'').toLowerCase();
  return str.split('').reverse().join('') == str
}