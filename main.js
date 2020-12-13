// DATA STRUCTURES


///// VARIABLES

/// var - not optimal for usage (old way of declaring a variable)
var myNumber = 1;

var myNumber = 2; 

// unchangable variable, only use when you want to keep one value
const myNumber2 = 5;

// do not assign new value to a const variable
// myNumber2 = 5 + 5;

console.log(myNumber2)

// let - optimal usage for when you want to change the value of the variable
let myNumber3 = 10;

myNumber3 = 15;

myNumber3 = myNumber3 + 5;

myNumber3+= 5;

let myString = "tree";

myString += " is //green";

console.log("My string length is: ", myString.length);

// // Escaping special characters
// \"
// \n
// \t

// template literals
console.log(`My number is ${myNumber3}
New line`);

console.log(myString);

let myNewString = "tea";

// Substring

let mySubString = myNewString.substring(0,2);

console.log(myNewString[0]);

console.log(mySubString);

// trim - it will remove spaces at the beginning and end of string (but not in between!)
let myTrimString = "   my string with spaces at both sides   ";

console.log(myTrimString.trim());


// Modulo operator - gives you a remainder of a division

let myModulo = 11%5;
console.log(myModulo);

// some number % 2 == 0, then it's even
// else, the number is odd

// Math ceil, math floor, math round

let myDecimal = 1.5;

console.log(Math.ceil(myDecimal)); // result: 2

console.log(Math.floor(myDecimal)); // result: 1

console.log(Math.round(myDecimal)); // result: 2

// Math random

let randomNumber = Math.random(); // from 0 to 0.9999 (not inclusive of 1!)

// Math max

let num1 = 5;
let num2 = 10;
let num3 = 15;

console.log(Math.max(num1, num2, num3));

// Math min

console.log(Math.min(num1, num2, num3));

// isNaN

console.log(isNaN(num1));

console.log(isNaN(myNewString));


// typeof - check the data structure of the variable

console.log(typeof(num1));
console.log(typeof(myNewString));


// very big or very small numbers using e

let thousand = 1e+3;
let threeDecimals = 1e-3;
console.log(thousand);
console.log(threeDecimals);


// toFixed - set limited number of decimals

let myPrice = 2.12324;

// the number inside the function signifies the number of decimal places

console.log(myPrice.toFixed(2));

// inifinity - JS data type for infinite variable

let myInfinite = Infinity;

console.log(myInfinite);

// Booleans

let myStatement = true;
let myFalseStatement = false;

let myTrueNumber = 5;

let q = parseInt(prompt("Enter number: "));

// if (q != myTrueNumber) {
//     alert("Error");
// }

// if (q >= 3 && q <= 10) {
//     alert("Success!");
// }

// if (q == 1 || q == 2) {
//     alert("Success!");
// }


// Scenario: we type 1
// the condition in the brackets is false AND true, which resuls in FALSE, so it moves onto ELSE
// (check truth table)

if (q != 1 && q != 2) {
    alert("Error!");
} else {
    alert("Continue");
}

// = vs == vs ===

// 1 == "1" => true
// 1 === "1" => false


// Operators

// DO WHILE 
// {do something}
// while (condition is met)

// ^ definitely executes itself once, then checks the condition, repeats itself if condition is true

// WHILE
// while (some condition) 
// {execute something}

// ^ checks condition first, executes if the condition is met
// will not be executed at all if the condition is false to begin with


let password = "secret";

console.log(password);

// condition inside the brackets checks the user input against the set password
// while (password != "secret") {
//     password = prompt("Enter password: ");
// }

// alert("You're in!");


    // OPTIONAL: find a way to ask user three times for a password with a for loop

    let userInput = prompt("Enter password: ");

    if (userInput == password) {
        alert("Hello!");
    } else {
        for (let i = 0; i < 2; i++) {
            userInput = prompt("Enter password: ");
            if (userInput == password) {
                alert("Hello!");
                break;
            } else {
                userInput = prompt("Enter password: ");
            }
    }

}


// ARRAYS (tutoring for Wednesday)

// push, pop, shift, unshift, splice, slice, selecting index
// for, for in, for of....