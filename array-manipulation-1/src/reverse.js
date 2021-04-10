/* exported reverse */

function reverse(array) {
  for (var i = 0, result = []; i < array.length; i++) {
    result.unshift(array[i]);
  }
  return result;
}
