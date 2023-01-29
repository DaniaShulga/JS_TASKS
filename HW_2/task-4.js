const formatString = function(string){
    let strSplit = Array.from(string);
    
    for(let i = 0; i < string.length; i++){
        if(string.length < 40){
            return string;
        }
          else if(string.length > 40){
            let res = strSplit.splice(0,38);
            res.push('...')
            return res.join("");
        }
    }
}
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться форматований рядок

console.log(formatString('Curabitur ligula sapien.'));
// повернеться оригінальний рядок

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// повернеться форматований рядок