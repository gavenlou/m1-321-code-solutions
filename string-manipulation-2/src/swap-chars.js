/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var result = string.substring(0, firstIndex) + string[secondIndex] +
  string.substring(firstIndex + 1);
  return result.substring(0, secondIndex) + string[firstIndex] + result.substring(secondIndex + 1);
}
