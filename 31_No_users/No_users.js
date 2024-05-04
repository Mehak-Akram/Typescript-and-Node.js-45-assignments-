"use strict";
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users = ["admin", "eric", "muntaha", "mehak", "falza"];
users = [];
if (users.length === 0) {
    console.log("Your Array is empty We need to find some users!");
}
else {
    for (let user of users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
}
