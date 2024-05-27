//define a function with a rest parameter that acceots items arguments representing our sanwich
function makeSandwich(... items: string[]){
    console.log("\n Making a sandwich with the following items: \n");

    items.forEach(singlItem => console.log(singlItem));

    console.log("\nNOw Enjoy Sandwich");
    
}
//call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "onion", "tomato");