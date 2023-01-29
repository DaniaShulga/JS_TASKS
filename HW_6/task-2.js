// ES5

function User(obj) {
  this.obj = obj;
}

User.prototype.getInfo = function () {
  console.log(
    `User ${this.obj.name} is ${this.obj.age} years old and has ${this.obj.followers} followers`
  );
};

const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers

// =====================================================================

// ES6

// class User {
//   constructor(obj) {
//     this.obj = obj;
//   }

//   getInfo() {
//     console.log(
//       `User ${this.obj.name} is ${this.obj.age} years old and has ${this.obj.followers} followers`
//     );
//   }
// }

// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers
