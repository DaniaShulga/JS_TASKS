import users from "./users.js"

const getUsersWithGender = (users, genders) => {
    let res = users.map(({gender, name}) => {
       if(gender === genders){
        return name
       }
    });
    return res;
};
  
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]