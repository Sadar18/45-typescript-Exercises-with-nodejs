//list of current users 
let current_users = ["ishaque", "ali", "ahmed", "hussain","hamza"]
//new users
let new_users = ["ayesha", "Ali", "ahmed", "mahad", "areeba"]

//loop through new_users to check for usersnames availibilty

new_users.forEach(new_one_user => {
    //making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    //print different messages using if else statements
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken`)
        
    }else{
        console.log(`this Username ${new_one_user} is available`)
    }
})