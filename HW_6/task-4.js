// ES5

function StringBuilder(_value) {
  this._value = _value;
}

StringBuilder.prototype.value = function () {
  return this._value;
};

StringBuilder.prototype.append = function (str) {
  return (this._value += str);
};

StringBuilder.prototype.prepend = function (str) {
  return (this._value = str + this._value);
};

StringBuilder.prototype.pad = function (str) {
  return (this._value = str + this._value + str);
};

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value()); // '.^'

builder.prepend("^");
console.log(builder.value()); // '^.^'

builder.pad("=");
console.log(builder.value()); // '=^.^='

// =====================================================================

// ES6

// class StringBuilder {
//   constructor(_value) {
//     this._value = _value;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     return (this._value += str);
//   }

//   prepend(str) {
//     return (this._value = str + this._value);
//   }

//   pad(str) {
//     return (this._value = str + this._value + str);
//   }
// }

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='
