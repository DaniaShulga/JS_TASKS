let input = prompt('Введіть число:');
let total = 0;
let i = 0;

    if(isNaN(input)){
        input = 0;
        alert('Було написано не число, спробуйте ще раз')
    }

    while (input !== null) {
        i += 1;
        total += Number(input);
        input = prompt('Введіть ще число:');
    }

   alert(`Загальна сума чисел дорівнює ${total}`)




   

   




