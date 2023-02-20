let fruits = ["apple", "orange", "banana"];

let numbers = [1, 2, 3, 4, 5];

//Iterator/Loop Array Method:
//forEach() method
// Performs the specified action for each element in an array.
fruits.forEach(
    //function (value, index, array):
    //         (apple,   0,  fruits)
    //value is required, index and array are optional
    
    function (value, index, array) {
       // console.log(`${value}`); //prints out the value of the item in the array i.e. apple
       // console.log(`${index}`); //prints out the index number of the item in the array.
       //console.log(array); // prints out the array once per item in the array.
       //console.log(fruits); // prints out the array once per item in the array.

       //using value and index in a `template literal` sentence:
    //    console.log(`${value} has a index of ${index}`);
    }
);

/*______*/

//map() method with strings
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
function makeLettersCap(value) {
    return value.toUpperCase();
}

let fruitsCap = fruits.map(makeLettersCap);
//We now have a new array, of fruitsCap, with letters capitalized.

// console.log(fruitsCap);
// //Orrignal array is untouched:
// console.log(fruits);

/*______*/

//map() method with numbers
function timesTwo(xalue) {
    return xalue * 2;
}

let numbersTwo = numbers.map(timesTwo)
// console.log(numbersTwo);

/*______*/

//filter() method
// Returns the elements of an array that meet the condition specified in a callback function.
let evenNumbers = numbers.filter(
    function (value, index, array) {
        return value % 2 === 0;
     }
)
//console.log(evenNumbers);

/*______*/

//reduce() method
// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
//the total is where the numbers are stored as the reduce() method iterates over the array.
function addNumers(total, value, index, array) {
    return total + value;
}
let sum =numbers.reduce(addNumers);
//console.log(sum);

/*______*/



