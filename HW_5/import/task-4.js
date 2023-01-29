import users from "./users.js"

const getInactiveUsers = users => {
    let res = users.filter(({isActive}) => {
        return !isActive;
    });
    return res;
};
  
console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]