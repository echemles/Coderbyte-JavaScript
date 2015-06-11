function LetterCountI(str) {
  var strb = str;
  strb = strb.replace(/[0-9~!@#$%^&*()-=_+?.,]/g, '');
  strb = strb.toLowerCase().split(' ');
  var str2 = new Array(strb.length),
      arr = new Array(strb.length),
      arr2 = [],
      greatest = [],
      greatestIndex;
  
  for (var i=0; i<strb.length; i++) {
    strb[i].split('').forEach(function(x){
      if (str2[i] == undefined) str2[i] = new Object();
      if (str2[i][x] == undefined) str2[i][x] = null;
      str2[i][x] += 1;
    });
  }
    
  for (var i=0; i<str2.length; i++) {
    arr[i] = new Array();
    for(var key in str2[i]){
    	arr[i].push(str2[i][key]);
    }
  }

  for (var i=0; i<arr.length; i++) {
    arr[i] = arr[i].sort().reverse();
    arr[i] = arr[i].filter(function(z) {return z>1});
  }
  
  for (var i=0; i<arr.length; i++) {
    if (arr[i] > greatest) greatest = arr[i];
  }
  
  greatestIndex = arr.indexOf(greatest);

  str = str.split(' ');
  
  return str[greatestIndex] || -1;    
}