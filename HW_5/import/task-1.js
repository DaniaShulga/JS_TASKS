import users from "./users.js"

const getUserNames = (users) => {
    let res = users.map(({name}) => {
        return name;
    });
    
    console.log(res);
};

  
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]