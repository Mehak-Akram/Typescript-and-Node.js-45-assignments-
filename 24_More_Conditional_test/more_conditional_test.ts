//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:

//DEFINE VARIABLE

let apple: string = "apple";
let upperCase: string = "APPLE";
let ten: number = 10;
let twenty: number = 20;

let fruits: string[] = ["banana", "apple","orange"];

//• Tests for equality and inequality with strings


console.log("Is apple is equal to apple?")
console.log(apple == "apple");//true

console.log("\n Is apple is not equal to apple?")
console.log(apple != "apple");//false

// • Tests using the lower case function
console.log("\n Is APPLE is equal to apple after converting to lower case")
console.log(upperCase.toLocaleLowerCase() == "apple" );//true

console.log("\n Is APPLE is not equal to apple after converting to lower case")
console.log(upperCase.toLocaleLowerCase() != "apple" );//false

// • Numerical tests involving equality and inequality,greater than and less than, greater than or equal to, and less than or equal to

console.log("\n Is ten is equal to twenty")
console.log(ten == twenty);//false

console.log("\n Is ten is not equal to twenty")
console.log(ten != twenty);//true

console.log("\n Is ten is greater than 0")
console.log(ten > 0);//true

console.log("\n Is twenty is less than 10")
console.log(twenty < 10)//false

console.log("\n Is ten is greater than or is equal to 5?")
console.log(ten >= 5);//true

console.log("\n Is ten is less than or equal to twenty")
console.log(twenty <= ten);//false

// • Tests using "and" and "or" operators

//using && (AND)
console.log("\n IS twenty is not equal to 10 and twenty is greater than 10")
console.log(twenty != 10 && twenty > 10);//true

console.log("\n IS twenty is  equal to 10 and twenty is greater than 10")
console.log(twenty == 10 && twenty > 10)//false

//using || (OR)

console.log("\n IS twenty is  equal to 10 or twenty is greater than 10")
console.log(twenty == 10 || twenty > 10);//true


console.log("\n IS twenty is  equal to 30 and twenty is less than 10")
console.log(twenty == 30 || twenty < 10)//false

// • Test whether an item is in a array

// • Test whether an item is not in a array
console.log("\n Is orange includes in fruits array?")
console.log(fruits.includes("orange"));//true

// • Test whether an item is not in a array

console.log("\n Is mango includes in fruits array?")
console.log(fruits.includes("mango"))//false













