//define variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//test for equality and inequilty with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nis apple is not equal to apple?");
console.log(apple != apple);
//tests using lower case function
console.log("is APPLE  is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("is APPLE  is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical tests 
//Equal to
console.log("\n is ten is equal to twenty");
console.log(ten == twenty);
//not equal to 
console.log("\n is ten is not equal to twenty?");
console.log(ten != twenty);
//greater than 
console.log("\nis ten is greater than zero?");
console.log(ten > 0);
//less than 
console.log("\nis twenty is less than 10");
console.log(twenty < 10);
//Greater than or equal to 
console.log("\n is ten is greater than or equal to 5?");
console.log(ten >= 5);
//les than or equal to 
console.log("\n is twenty is less than or equal to 10");
console.log(twenty <= 10);
// tests using  "And" & "OR" operators
// using && 
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//using || (OR)
console.log("\n twenty is greater than 50 or 20  is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n twenty is greater than 50 or 20  is equal to 20");
console.log(20 > 50 || 20 != 20);
//test wheather an item is inculded in array 
//include 
console.log("\nis orange inculde in my fruits array");
console.log(fruits.includes("orange"));
// not include (! sign of exclamation is used for not inculde)
console.log("\n is orange is not inculded in my fruits array");
console.log(!fruits.includes("orange"));
