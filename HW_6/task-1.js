// ES5

function Account(obj) {
  this.obj = obj;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.obj.login}, Email: ${this.obj.email}`);
};

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

// =====================================================================

// ES6

// class Account {
//   constructor(obj) {
//     this.obj = obj;
//   }

//   getInfo() {
//     console.log(`Login: ${this.obj.login}, Email: ${this.obj.email}`);
//   }
// }

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com
