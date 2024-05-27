// define the function to show magicians names

function show_magicians(magicians: string []){
    magicians.forEach(name => console.log(name));
}
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}
//define an array of magicians names
let magician_names = ["ishaque", "akmal", "awais"];


let great_magicians = make_great (magician_names);

show_magicians(great_magicians)


