const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

let key = Object.keys(user);

for(let item of key){
    console.log(`${item} : ${user[item]}`)
}



