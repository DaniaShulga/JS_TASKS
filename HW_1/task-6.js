let input = prompt('Введіть число:');
let total = 0;

    if(isNaN(input)){
        input = 0;
        alert('Було написано не число, спробуйте ще раз')
        input = prompt('Введіть число:');
    }

    for(let i = 0; i < input; i++){
        if (input !== null) {
            total += Number(input);
            input = prompt('Введіть ще число:');
        }
    }
    alert(`Загальна сума чисел дорівнює ${total}`)



   

   




