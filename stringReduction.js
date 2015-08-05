function StringReduction(str) { 
  var replacements = {"ab":"c","ac":"b","bc":"a","ba":"c","ca":"b","cb":"a"},
      original, key;
  while(str != original ) {
   original = str;
   for(key in replacements) str = str.replace(key, replacements[key]);
  }
  return str.length;
}