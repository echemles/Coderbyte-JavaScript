function ABCheck(str) { 
  return str.match(/a.{0,3}b/) !== null ? true:false;
}