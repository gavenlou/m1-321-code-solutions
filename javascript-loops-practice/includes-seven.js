/* exported includesSeven */

function includesSeven(array) {
  for (var i = 0, result = false; i < array.length; i++) {
    if (array[i] === 7) result = true;
  }
  return result;
}
