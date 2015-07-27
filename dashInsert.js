function DashInsert(str) {
  var addDash = function (x) {x = x.split(''); return x[0] + '-' + x[1];};
  str = str.replace(/[13579][13579]/g, addDash)
  return str.replace(/[13579][13579]/g, addDash)
}