/*partitionOn the items array so that all values for which segregateIntoTwo returns true are
at the end, returning the index of the first true value*/
/*segregateIntoTwo returns true 
or false based on a given condition*/
function partitionOn(segregateIntoTwo, items) {
  let res1 = [], res2 = [];
  for (let i of items) {
    segregateIntoTwo(i) ? res1.push(i) : res2.push(i);
  }
  let temp = [...res2, ...res1];
  for (var i = 0; i < temp.length; i++) {
    items[i] = temp[i];
  }
  return res2.length;
}
