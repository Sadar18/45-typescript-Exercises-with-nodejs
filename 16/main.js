// creating a guest list array
var guestlist = ["Ishaque", "Akmal", "Tariq", "Zeeshan"];
//making variable for those guest who are not coming
var dontCome = guestlist[0];
// print the name of guest who are not coming
console.log(dontCome, "I am not coming");
//add or remove guest from guest list array 
guestlist.splice(0, 1, "Awais");
//message print for bigger table
console.log("we have found bigger table for dinner.");
//adding a new guest at starting index of array
guestlist.unshift("Ajmal");
//adding a new guest at ending index of array
guestlist.push("Bilal");
// get a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
//adding a new guest to middle index of array
guestlist.splice(middleindex, 0, "Sarfaraz");
//print message of updated list 
console.log("Updated list of our Guests");
// sending a invitation message to our guests one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
