//define variable 
//• If the alien is green, print a message that the player earned 5 points.
//using IF and Else IF statement
var alienColor = "green";
if (alienColor === "green") {
    console.log("(Version 1) you shot down green alien you have earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("you have shot down yellow alien you have earned 10 points.");
}
else if (alienColor === "red") {
    console.log("you have shot down red alien you have earned 15 points");
}
//• If the alien is yellow, print a message that the player earned 10 points.
//version 2
var alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("you shot down green alien you have earned 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("(Version 2) you shot down yellow alien you have earned 10 points");
}
else if ((alienColor2 === "red")) {
    console.log("you shot dowm red alien you have earned 15 points");
}
//• If the alien is red, print a message that the player earned 15 points.
//version 3
var alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("you shot down green alien you have earned 5 points");
}
else if (alienColor3 === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points");
}
else if (alienColor3 === "red") {
    console.log("(Version 3) you shot dowm red alien you have earned 15 points ");
}
