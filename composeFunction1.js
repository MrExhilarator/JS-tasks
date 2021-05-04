/* compose takes an array with functions and returns a value after 
performing each function on the num passed as an argument*/
function compose(...args) {
    return (num) => {
        args.reverse().forEach((i) => num = i(num));
        return num;
    }
}
