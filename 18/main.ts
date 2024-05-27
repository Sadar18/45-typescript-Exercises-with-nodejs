//Think of at least five places in the world you’d like to visit. & Make sure the array is not in alphabetical order.
let CountriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina", "Ecuador"];
//• Print your array in its original order.

console.log("Original Order:", CountriesToVisit);
//print the array in alphabetical order without modifying the actual array list

console.log("Alphabatecial Order:", [...CountriesToVisit].sort());
//• Print your array in alphabetical order without modifying the actual list.
console.log("Still in Original order:", CountriesToVisit);

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse order:", [...CountriesToVisit].reverse());

//• Show that your array is still in its original order by printing it again.
console.log("Still in Original order:", CountriesToVisit);

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("original array reversed:", CountriesToVisit.reverse());

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to original order:", CountriesToVisit.reverse());

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Sorted in Alphabatecial order:", CountriesToVisit.sort());

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Original array reversed again:", CountriesToVisit.reverse());