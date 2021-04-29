/*compose takes two functions as parameters and returns a composite 
function. It does internally this compose(f , g)(x) => f( g( x ) )*/
function compose(function1, function2) {
  return function (...a) {
    return function1(function2(...a));
  }
}
