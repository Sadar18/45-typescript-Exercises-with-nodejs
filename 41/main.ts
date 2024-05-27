//define a function to print each magician name from an array 
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}
//define a array containing magician name
let magician_names = ["ishaque", "akmal", "awais"]
//call the funcrion to print each magician name
show_magicians(magician_names);