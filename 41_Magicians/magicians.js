"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician = ["Alice", "David", "Chris"];
function show_magicians(params) {
    for (let magicians of magician) {
        console.log(magicians);
    }
}
show_magicians(magician);
