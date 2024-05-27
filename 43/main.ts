// define the function to show magicians names

function show_magicians(magicians: string []){
    magicians.forEach(name => console.log(name));
}
//function to make maficians great throwgh .map() it will modify array
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}
//define an array of magicians names
let magician_names = ["ishaque", "akmal", "awais"];
//making a copy of original array through .slice() function

let copy_magician_names = magician_names.slice()

//modify the copied array to include "the great" with thier names
let copy_great_magicians =make_great(copy_magician_names);

//show both arrays original and copied
//original 
console.log("original array\n")
show_magicians(magician_names);
//copied
console.log("\ncopied array\n")
show_magicians(copy_great_magicians);