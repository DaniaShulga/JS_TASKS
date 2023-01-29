import users from "./users.js"

const getUsersWithFriend = (users, friendName) => {
    let res = users.map(({friends, name}) => {
       return friends.map((item) => {
            if(item === friendName){
                return name;
            }
       });
    });
    return res;
};
  
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]