import users from "./users.js"

const getUsersWithAge = (users, min, max) => {
    let res = users.filter(({age, name}) => {
        if(age > min && age < max){
            return name;
        }
    });
    return res;
  };
  
  console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
  
  console.log(getUsersWithAge(users, 30, 40));
  // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]