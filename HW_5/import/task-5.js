import users from "./users.js"

const getUserWithEmail = (users, emails) => {
   let res = users.map(({email}) => {
        if(email === emails){
            return {
                ...items
            }
        }
   });
   return res;
};
  
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}