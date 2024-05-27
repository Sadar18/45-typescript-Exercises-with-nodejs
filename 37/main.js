function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// calling a function with by_default values
make_shirt();
make_shirt("Medium");
// calling a function now with small size and also different print message
make_shirt("small", "I love JavaScript");
