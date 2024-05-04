"use strict";
//Store the location in a Array,Make sure the Array is not in alphabetical order.
let places = ["Turkey", "Italy", "Japan", "Germany", "London"];
//print your Array in its orignal Order
console.log("Orignal order ", places);
//print your Array in a alphabetical order without modifying the actual list.
console.log("alphabetical order", places.slice().sort());
// Show that your Array is still its orignal order by printing the actul list.
console.log("Orignal order after sorting ", places);
//print your Array in reverse alphabetical order without changing the orignal order of the orignal list.
console.log(" reverse alphabetical order", places.slice().sort().reverse());
//Show that your Array is still its orignal order by printing it again.
console.log("Orignal order after reverse sorting ", places);
//Reverse the order of your list.print the Array to show that its order has changed.
places.reverse();
console.log("Reverse order", places);
//Reserve the order of yor list again.print the list to show it's back to its orignal Order.
places.reverse();
console.log("Back to orignal order", places);
//sort your to it's stored in alphabetical order. print the array to show that its order has been changed.
console.log(" sorted in alphabetical order", places.slice().sort());
//sort to changed yur Array so it's stored in reverse alphabetical order.print the list to show that it's order has changed.
console.log("stored in reverse alphabetical order", places.slice().sort().reverse());
