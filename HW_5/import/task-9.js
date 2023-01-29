import users from "./users.js"

// {
//   id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//   name: 'Sharlene Bush',
//   email: 'sharlenebush@tubesys.com',
//   eyeColor: 'blue',
//   friends: ['Briana Decker', 'Sharron Pace'],
//   isActive: true,
//   balance: 3821,
//   skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//   gender: 'female',
//   age: 34,
// }

const getNamesSortedByFriendsCount = users => {
    let res = users.sort((a, b) => {
      return a.friends.length - b.friends.length
    }).map((item) => {
        return item.name
    });
    return res;
  };

  
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]