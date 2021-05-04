/*add returns a curried function which 
gives the sum of all the parameters*/
function add(num) {
  var curriedSum = (additive) => add(num + additive);
  curriedSum.valueOf = () => num;
  return curriedSum;
}
