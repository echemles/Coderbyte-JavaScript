function DashInsertII(num) {
  function addDash(x) {return x.split('').join('-')};
  function addAst(y) {return y.split('').join('*')};
  num = num.toString().replace(/[13579][13579]/g,addDash).replace(/[2468][2468]/g,addAst);
  return num.replace(/[13579][13579]/g, addDash).replace(/[2468][2468]/g,addAst);
}