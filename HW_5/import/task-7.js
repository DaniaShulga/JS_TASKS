import users from "./users.js"

const calculateTotalBalance = users => {
    let res = users.reduce((acc, {balance}) => {
        return acc + balance;
    }, 0);
    return res;
};
  
console.log(calculateTotalBalance(users)); // 20916