/* exported initial */

function initial(array) {
  for (var i = 0, result = []; i < array.length - 1; i++) {
    result.push(array[i]);
  }
  return result;
}
