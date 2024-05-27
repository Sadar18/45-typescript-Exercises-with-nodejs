//list of current users 
var current_users = ["ishaque", "ali", "ahmed", "hussain", "hamza"];
//new users
var new_users = ["ayesha", "Ali", "ahmed", "mahad", "areeba"];
//loop through new_users to check for usersnames availibilty
new_users.forEach(function (new_one_user) {
    //making a condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //print different messages using if else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("this Username ".concat(new_one_user, " is available"));
    }
});
