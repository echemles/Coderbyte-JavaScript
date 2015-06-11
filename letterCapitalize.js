function LetterCapitalize(str) {
  return str.replace(/\b[a-z]/g,function(c){
      return c.toUpperCase()
  });
}