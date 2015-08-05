function RunLength(str) {
    var answer = [], counter, i, j;
    for (i=0; i<str.length; i += j){
        counter = 1;
        for ( j=1; j<str.length; j++){
            if (str[i+j] === str[i]) counter += 1;
            else if (str[i+j] !== str[i]){
                ans.push(counter+str[i]);
                break;
            }
        }
    }
    return answer.join('');
}