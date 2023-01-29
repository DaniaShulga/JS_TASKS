// ES5

function Storage(array) {
  this.array = array;
}

Storage.prototype.getItems = function () {
  return this.array;
};

Storage.prototype.addItem = function (item) {
  return this.array.push(item);
};

Storage.prototype.removeItem = function (item) {
  for (let i = 0; i < this.array.length; i += 1) {
    if (this.array[i] === item) {
      this.array.splice(i, 1);
    }
  }
};

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// =====================================================================

// ES6

// class Storage {
//   constructor(array) {
//     this.array = array;
//   }

//   getItems() {
//     return this.array;
//   }

//   addItem(item) {
//     return this.array.push(item);
//   }

//   removeItem(item) {
//     for (let i = 0; i < this.array.length; i += 1) {
//       if (this.array[i] === item) {
//         this.array.splice(i, 1);
//       }
//     }
//   }
// }

// const storage = new Storage([
//   "Нанітоіди",
//   "Пролонгер",
//   "Залізні жупи",
//   "Антигравітатор",
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem("Дроїд");
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem("Пролонгер");
// console.table(items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
