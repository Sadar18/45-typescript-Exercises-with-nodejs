var guestlist = ["Ishaque", "akmal", "tariq", "zeeshan",];
var notcoming = guestlist[0];
console.log(notcoming, "I am not coming");
guestlist.splice(0, 0, "Awais");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me")); });
