const numbers = [];
let input = prompt("Введіть число:");
let total = 0;

if(isNaN(input)){
    alert('Було введено не число, попробуйте ще раз');
    input = prompt("Введіть число:");
    
}

for(let i = 0; i < input; i++){
    if(input !== null){
        total += Number(input);
        input = prompt("Введіть число:");
        numbers.push(input);
    }
}

console.log(`Загальна сума чисел дорівнює ${total}`);



