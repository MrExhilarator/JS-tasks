/*add returns a curried function which 
gives the sum of all the parameters*/
function add(number) {
  var curriedSum = function (additive) {
    return add(number + additive);
  };

  curriedSum.valueOf = function () {
    return number;
  };

  return curriedSum;
}
