/* exported compact */

function compact(array) {
  for (var i = 0, result = []; i < array.length; i++) {
    if (array[i]) result.push(array[i]);
  }
  return result;
}
