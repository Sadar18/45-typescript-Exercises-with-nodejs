function make_shirt (size: string = "large", printMessage: string = "I love typescript"){
    console.log (`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}
// calling a function with by_default values
make_shirt();
make_shirt("Medium")
// calling a function now with small size and also different print message
make_shirt("small", "I love JavaScript") 