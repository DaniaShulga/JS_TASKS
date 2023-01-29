const calculateEngravingPrice = function (message, pricePerWord){
    let strSplit = message.split(" ");
    for(let i = 0; i < strSplit.length; i++){
        console.log(strSplit.length * pricePerWord);
    }
}
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10));