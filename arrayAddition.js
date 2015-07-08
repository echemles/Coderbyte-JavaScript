function ArrayAdditionI(arr) {
  var max = arr.sort(function(x,y){return x-y}).pop(),
      add = function(x,y){return x+y}, answer = false;
  if (arr.reduce(add) === max) answer = true;

  arr.forEach(function (n){
    if (arr.reduce(add) - n === max) answer = true;
    var arr2 = arr.slice(0);
    arr2.splice(arr2.indexOf(n));

    arr2.forEach(function (n2){
      if (arr2.reduce(add) - n2 === max) answer = true;
      var arr3 = arr2.slice(0);
      arr3.splice(arr3.indexOf(n2));

      arr3.forEach(function (n3){
            if (arr3.reduce(add) - n3 === max) answer = true;
        var arr4 = arr3.slice(0);
        arr4.splice(arr4.indexOf(n3));

        arr4.forEach(function (n4){
              if (arr4.reduce(add) - n4 === max) answer = true;
            });
        });
    });
  });
  return answer;
}