/*getMiddle returns a substring from the given
string based on the median of string's length*/
function getMiddle(string) {
  let lengthOfString = string.length;
  let index = Math.floor(lengthOfString / 2);
  return lengthOfString % 2 == 0 ? string[index - 1] + string[index] : string[index];
}
