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