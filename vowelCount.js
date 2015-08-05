function VowelCount(str) {
  return str.match(/[aeiou]/gi) !== null ? str.match(/[aeiou]/gi).length:0;
}