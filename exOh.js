function ExOh(str) {
  if (str.match(/x/g) !== null &&
      str.match(/o/g) !== null && 
      str.length !== 1 ) {
    return str.match(/x/g).length === str.match(/o/g).length;
  } else {
    return false;
  }
}