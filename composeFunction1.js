/* compose takes an array with functions and returns a value after 
performing each function on the number passed as an argument*/
function compose(...args) {
    return function (number) {
        args.reverse().forEach((i) => number = i(number));
        return number;
    }
}
