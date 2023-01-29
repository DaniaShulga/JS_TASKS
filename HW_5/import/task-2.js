import users from "./users.js"

const getUsersWithEyeColor = (users, color) => {
   let res = users.filter(({eyeColor}) => {
        return eyeColor === color;
    });
    return res;
};


console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]