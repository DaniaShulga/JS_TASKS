let credits = 23580, 
pricePerDroid = 3000, 
totalPrice,
restOfMoney,
countDroids = prompt('Введіть к-сть дроїдів:');

if (countDroids == null) {
    console.log('Скасовано користувачем!');
} else {
    totalPrice = pricePerDroid * countDroids;
    console.log('Загальна ціна замовлення ' + totalPrice + ' кредитів');
}

if (totalPrice > credits) {
    console.log('Недостатньо коштів на рахунку!');
} else {
    restOfMoney = credits - totalPrice;
    console.log(`Ви купили ${countDroids} дроїдів, на рахунку залишилося ${restOfMoney} кредитів`);
}

