// ES5

function Car({ maxSpeed = 200, price = 2000 }) {
  this.speed = 0;
  this.price = price;
  this.maxSpeed = maxSpeed;
  this.isOn = false;
  this.distance = 0;
}

Car.prototype.getSpecs = function (car) {
  console.log(
    `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
  );
};

Car.prototype.outputPrice = function () {
  return this.price;
};
Car.prototype.inputPrice = function (newPrice) {
  return (this.price = newPrice);
};

Car.prototype.turnOn = function () {
  return (this.isOn = true);
};

Car.prototype.turnOff = function () {
  return (this.isOn = false), (this.speed = 0);
};

Car.prototype.accelerate = function (value) {
  if (this.speed <= this.maxSpeed) {
    return (this.speed = value);
  }
};

Car.prototype.decelerate = function (value) {
  if (this.speed > 0) {
    return (this.speed -= value);
  }
};

Car.prototype.drive = function (hours) {
  if (this.isOn) {
    return (this.distance += hours * this.speed);
  }
};

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

mustang.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

mustang.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

// =====================================================================

// ES6

// class Car {
//   static getSpecs(car) {
//     console.log(
//       `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
//     );
//   }

//   constructor({ maxSpeed = 200, price = 2000 }) {
//     this.speed = 0;
//     this.price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = false;
//     this.distance = 0;
//   }

//   get outputPrice() {
//     return this.price;
//   }

//   set inputPrice(newPrice) {
//     return (this.price = newPrice);
//   }

//   turnOn() {
//     return (this.isOn = true);
//   }

//   turnOff() {
//     return (this.isOn = false), (this.speed = 0);
//   }

//   accelerate(value) {
//     if (this.speed <= this.maxSpeed) {
//       return (this.speed = value);
//     }
//   }

//   decelerate(value) {
//     if (this.speed > 0) {
//       return (this.speed -= value);
//     }
//   }

//   drive(hours) {
//     if (this.isOn) {
//       return (this.distance += hours * this.speed);
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
