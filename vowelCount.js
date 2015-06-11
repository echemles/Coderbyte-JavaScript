function VowelCount(str) {
  if (str.match(/[aeiou]/g) !== null)
    return str.match(/[aeiou]/g).length;
  else
    return 0;
}