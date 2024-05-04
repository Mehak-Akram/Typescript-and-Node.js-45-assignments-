"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let guestlist = ["samia", "Aisha", "Hadia",];
let absentguest = "samia";
let newguest = "zainab";
guestlist[0] = newguest;
for (let i = 0; i < guestlist.length; i++) {
    console.log("Dear " + guestlist[i] + ",\n\n it is our pleasure to invite you our party.\n\n Thankyou!\n\n");
}
console.log(`${absentguest} is not coming.`);
