import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

let doubleNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubleNumbers);

//Filter - Create a new array by keeping the items that return true.

let greaterThanTen = numbers.filter(function (num) {
  return num > 10;
});

console.log(greaterThanTen);

//Reduce - Accumulate a value by doing something to each item in an array.

let sumOfNumbers = 0;

sumOfNumbers = numbers.reduce(function (sumOfNumbers, num) {
  return sumOfNumbers + num;
});

console.log(sumOfNumbers);

//Find - find the first item that matches from an array.

let itemGreaterThanTen = numbers.find(function (num) {
  return num > 10;
});

console.log(itemGreaterThanTen);

//FindIndex - find the index of the first item that matches.

let indexOfItemGreaterThanTen = numbers.findIndex(function (num) {
  return num > 10;
});

console.log(indexOfItemGreaterThanTen);

let meaningArray = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(meaningArray);
