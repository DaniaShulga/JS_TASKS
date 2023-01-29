const countTotalSalary = function (employees) {
    let value = Object.values(employees);
    let total = 0;

    for(let i = 0; i < value.length; i += 1){
        total += value[i];
    }

return total
};

console.log(countTotalSalary({})); // 0

console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330

  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400