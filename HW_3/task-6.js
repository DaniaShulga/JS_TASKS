const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
const calculateTotalPrice = function (allProdcuts, productName) {
    for (let item in allProdcuts) {
        if (Object.values(allProdcuts[item]).includes(productName)) {
            let price = allProdcuts[item].price;
            let qty = allProdcuts[item].quantity;
            return  price*qty;
        }
    }
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
