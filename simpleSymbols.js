function SimpleSymbols(str) {
  str = str.replace(/\+[a-z]\+/g,'');
  return str.match(/^[a-z]|[a-z]$|[^+][a-z]|[a-z][^+]/) !== null ? false:true;
}