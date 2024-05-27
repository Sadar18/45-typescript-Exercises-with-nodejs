let guestlist = ["Ishaque", "akmal", "tariq", "zeeshan",];

let notcoming = guestlist[0];

console.log(notcoming, "I am not coming");

guestlist.splice(0, 0, "Awais");

guestlist.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me`));