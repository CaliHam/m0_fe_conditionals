//Mild Challenge
//Write a JavaScript program that defines a variable that stores a Number. 
//The program should print out the String "even" if the Number is even, and the 
//String "odd" if the Number is odd. Hint: You may need to do some extra research on 
//the remainder operator (%) to solve this challenge.

var episodesWatched = 135;

if (episodesWatched % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
};
// The remainder operator (%) does long division to see if there is a remainder leftover 
// after  it completely divides. If there is a remainder, it is odd. If there is no remainder (0)
// then it is even.

// MEDIUM
// Using the following variables:

var goodDrivingRecord = true;
var age = 23;


// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

if (goodDrivingRecord === true && age >= 25) {
    console.log("Congratulations! You get a discount.");
} else if (goodDrivingRecord === true || age >= 25) {
    console.log("Pay full price.");
} else {
    console.log("Have someone else sign for the rental.");
};

// if (goodDrivingRecord === false || age < 25) 