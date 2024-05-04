"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColor = "green";
//• If the alien is green, print a message that the player earned 5 points.
//version 1
if (alienColor == "green") {
    console.log("player earned 5 points.");
}
else if (alienColor == "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColor == "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color:");
}
//• If the alien is yellow, print a message that the player earned 10 points.
//version 2
alienColor = "yellow";
if (alienColor == "green") {
    console.log("player earned 5 points.");
}
else if (alienColor == "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColor == "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color:");
}
//• If the alien is red, print a message that the player earned 15 points.
//version 3
alienColor = "red";
if (alienColor == "green") {
    console.log("player earned 5 points.");
}
else if (alienColor == "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColor == "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color:");
}
