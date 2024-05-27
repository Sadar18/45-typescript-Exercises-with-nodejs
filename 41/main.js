//define a function to print each magician name from an array 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define a array containing magician name
var magician_names = ["ishaque", "akmal", "awais"];
//call the funcrion to print each magician name
show_magicians(magician_names);
