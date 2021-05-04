/*cache takes a function and caches its results depending on the 
arguments, that were applied to the function*/
function cache(func) {
  var calls = {};
  return function () {
    var key = JSON.stringify(arguments);
    if (!(key in calls)) {
      calls[key] = func.apply(null, arguments);
    }
    return calls[key];
  };
}
