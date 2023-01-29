const findBestEmployee = function (employees) {
    let key = Object.keys(employees);
    let value = Object.values(employees);
    
    for(let i = 0; i < key.length; i += 1){
        if(value[i] > value[0]){
            key[0] = key[i];
        }
    }
    return key[0]
};

console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence

  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux
