//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let Guest_List: string[] =["samia","Aisha","Hadia"];

let absentguest: string = "samia";

let newguest: string = "Zainab"
Guest_List[0]= newguest;

console.log(`${absentguest} is not coming.`);

console.log("Good news we find big table so we invited 3 more guest");

Guest_List.unshift("Misbha")
Guest_List.splice(2 , 0 , "Falza" );
Guest_List.push("Muntaha");

for(let i=0; i< Guest_List.length; i++){

    console.log("Dear "+ Guest_List[i] +  ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n" )    
}

console.log("\nSorry we cannot arrange big table,only two people will be invited ");

while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry ${remove_Guest}, you are not invited for dinner.`);
}

for(let i=0; i< Guest_List.length; i++){

    console.log("Dear "+ Guest_List[i] +  ",\n\n you are still invited.\n\n Thankyou!\n\n" )    
}

Guest_List.splice(0 , 2);
console.log(Guest_List);

