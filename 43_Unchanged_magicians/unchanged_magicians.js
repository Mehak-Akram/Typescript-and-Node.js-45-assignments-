"use strict";
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
///and one array with the Great added to each magician’s name. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names 
let magician = ["Alice", "David", "Chris"];
function copy_array(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(params) {
    for (let magicians of magician) {
        console.log(magicians);
    }
}
let magicianArraycopy = copy_array(magician);
make_great(magicianArraycopy);
console.log("\n\nThis is my orignal array");
show_magicians(magician);
console.log("\n\nThis is my modified copy of the array");
show_magicians(magicianArraycopy);
