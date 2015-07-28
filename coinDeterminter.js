function CoinDeterminer(num) {
  var coins = [1, 5, 7, 9, 11],
      counter, sum = 0,
      combinations = [];
  for (var i=0; i<999999; i++){
    counter += 1;
    if (sum === num) combinations.push(counter);
    if (sum > num) {
      sum = 0, 
      counter = 0
    }
    sum += coins[Math.round(Math.random()*4)]
  }
  return combinations.sort(function(a,b){return a-b}).shift();
}