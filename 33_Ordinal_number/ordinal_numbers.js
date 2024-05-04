"use strict";
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// • Store the numbers 1 through 9 in a array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
for (let ordNumber of numbers) {
    let ordinalEnding;
    // • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
    if (ordNumber === 1) {
        ordinalEnding = "st";
    }
    else if (ordNumber === 2) {
        ordinalEnding = "nd";
    }
    else if (ordNumber === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${ordNumber}${ordinalEnding}`);
}
