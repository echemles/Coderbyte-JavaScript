function ABCheck(str) {
  if (str.match(/a.{3}b/g) !== null)
    return true;
  else
    return false;
}