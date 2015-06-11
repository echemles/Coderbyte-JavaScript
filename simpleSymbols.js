function SimpleSymbols(str) {
  str = " " + str + " ";
  condition1 = str.match(/[^\+][a-zA-Z]/g);
  condition2 = str.match(/[a-zA-Z][^\+]/g);
  if (condition1 === null && condition2 === null){
    return true}
  return false;
}