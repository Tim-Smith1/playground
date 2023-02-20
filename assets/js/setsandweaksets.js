////function declaration
// function myName() {
//     console.log("TS");    
// }

// myName();

////function expression

// let games = function () {
//     console.log("zelda");
// }

//games();


// let colors = function() {
//     console.log("red");
//     console.log("green");
//     console.log("blue");
// }

// colors();

// let myColors = colors;

// myColors();

// function favGame(game){
//     console.log(`My fav game is ${game}`);
// }

// favGame("zelda");

// function favFood(response) {
//     if (response === undefined){
//         console.log(`Please enter response e.g. ("pizza")`);
//     } else {
//         console.log(`My favorite food is ${response}`);
//     }
// }
// favFood("pie");

// function favNum(bacon) {
//     return `My fave num is ${bacon}`
// }
// let result = favNum(22);
// console.log(favNum(12));
// console.log(result);
// function openOrSenior(age, handicap){
//     if (age >= 55 && handicap > 7){
//     return 'Senior'; 
//   } else {
//     return 'Open';
//   }
//   }

// console.log(openOrSenior(19, -2));

// const book = {
//     title: "tom sawyer",
//     author: "mark twain",
//     // info: function() {
//     //     console.log(`this.${author}`);
//     // }
// }
// function info(year) {
//     console.log(`${this.title} was wtitten by ${this.author} in ${year}`);
// }

// info.apply(book, ["1920"]);

// const bookInfo = info.bind(book, "1920");
// bookInfo();

// let user = {
//     firstName: "tim",
//     country: "USA",
//     todos: {
//         t1: "shopping",
//         t2: "clean",
//         t3: "sleep",
//     }
// }

// let userStuff = {
//     firstName,
//     country,
//     todos: {t1, t2, t3}

// } = user

// console.log(user);

// let colors = ["red", "blue", "green"];

// let moreColors = [...colors, "salmon", "pink", "yellow"]

// console.log(colors);
// console.log(moreColors);
// colors.pop();


// const colors = function (...colors) {
//     console.log(colors.length);
// } 

// colors("red", "yellow", "green");

// const user = name => `My name is ${name}`;

// console.log(user("tim"));

// const greeting = () => console.log(`Hello how are you?`);
// greeting();




