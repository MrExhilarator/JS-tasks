/*isFloat returns true if the given value
is a decimal number*/
function isFloat(value) {
  return Number(value) !== parseInt(value);
}

/*prefill takes frequency and value and returns an array
with length frequency and all the elements as value*/
function prefill(frequency, value) {
  if (isNaN(parseInt(frequency)) || frequency < 0 || isFloat(frequency)) {
    throw new TypeError(`${frequency} is invalid`);
  }
  else {
    return Array(parseInt(frequency)).fill(value);
  }
}
