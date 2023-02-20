// let character = {
//   name: 'Sonic',
//   color: 'Blue',
//   speed: 1000,
// }

// for (let x in character) {
//   console.log(`${x} : ${character[x]}`);



// fruits.unshift("cherry", "pineapple")
// fruits.push("plum", "grapes")
// fruits.splice(3, 1, "lemon")
// fruits.sort();
// 

let fruits = ["apple", "orange", "banana"]

// fruits.forEach(
//   function (value, index) {
//     console.log(fruits);
//   }
// )

// function uCase(value) {
//     return value.toUpperCase();
// }

// let fruitsCap = fruits.map(uCase);

let fruit3 = fruits.every(
    function (v) {
      return v.length > 3;
    }
)


console.log(fruit3);
console.log(fruits);