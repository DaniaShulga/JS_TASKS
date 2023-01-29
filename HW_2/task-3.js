const findLongestWord = function(string){
    let strSplit = string.split(" ");
    let longWord = "";
    for (let i = 0; i < strSplit.length; i++) {
        if(strSplit[i].length > longWord.length){
            longWord = strSplit[i];
        }
    }
    return longWord;
    
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));