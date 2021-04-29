/*zero to nine functions return the calculated arithmetic operation value
if 1st argument is an operator else returns the number*/
function zero(a) {
  return arguments[0] ? Math.floor(getArithmeticOpValue(0, a[0], a[1])) : 0;
}
function one(a) {
  return arguments[0] ? Math.floor(getArithmeticOpValue(1, a[0], a[1])) : 1;
}
function two(a) {
  return arguments[0] ? Math.floor(getArithmeticOpValue(2, a[0], a[1])) : 2;
}
function three(a) {
  return arguments[0] ? Math.floor(getArithmeticOpValue(3, a[0], a[1])) : 3;
}
function four(a) {
  return arguments[0] ? Math.floor(getArithmeticOpValue(4, a[0], a[1])) : 4;
}
function five(a) {
  return arguments[0] ? Math.floor(getArithmeticOpValue(5, a[0], a[1])) : 5;
}
function six(a) {
  return arguments[0] ? Math.floor(getArithmeticOpValue(6, a[0], a[1])) : 6;
}
function seven(a) {
  return arguments[0] ? Math.floor(getArithmeticOpValue(7, a[0], a[1])) : 7;
}
function eight(a) {
  return arguments[0] ? Math.floor(getArithmeticOpValue(8, a[0], a[1])) : 8;
}
function nine(a) {
  return arguments[0] ? Math.floor(getArithmeticOpValue(9, a[0], a[1])) : 9;
}

/*getArithmeticOpValue returns the value of arithmetic operation
performed between given two values based on the given operator*/
function getArithmeticOpValue(value1, operator, value2) {
  if (operator == "+") {
    return value1 + value2;
  }
  if (operator == "-") {
    return value1 - value2;
  }
  if (operator == "*") {
    return value1 * value2;
  }
  if (operator == "/") {
    return value1 / value2;
  }
}

/*plus, minus, times, dividedBy returns an array with 
respective arithmetic operation and passed arguments as elements*/
function plus(a) {
  return ["+", a];
}
function minus(a) {
  return ["-", a];
}
function times(a) {
  return ["*", a];
}
function dividedBy(a) {
  return ["/", a];
}
