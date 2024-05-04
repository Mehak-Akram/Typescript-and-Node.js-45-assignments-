"use strict";
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sanwichies(item) {
    console.log("Making your sanwiches with:");
    for (let items of item) {
        console.log("- " + items);
    }
    console.log("enjoy your sanwich\n");
}
make_sanwichies(["cheese", "chicken",]);
make_sanwichies(["jelly", "peanut butter", "Tomato"]);
make_sanwichies(["mayo", "egg", "avocado"]);
