/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Number() explicitly tells Javascript to convert "5" from a string to a number.
let result = Number("5") - 2;
console.log("The result is: " + result);
// Boolean(false) explicitly sets isValidto the Boolean value false, so the if conditions does not run.
let isValid = Boolean(false);
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
// Number(age) coverts the string "25" to a number so it can add 5 and equal 30.
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

// Implicit type conversion
let implicitResult = "7" - 2;
console.log(implicitResult);

// Explicit type conversion
let price = "10";
let convertedPrice = Number(price) ;
console.log(convertedPrice);

let emptyValue = null ;
console.log(emptyValue) ;

let convertedValue = Number(emptyValue) ;
console.log(convertedValue) ;