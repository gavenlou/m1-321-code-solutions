/* exported tail */

function tail(array) {
  for (var i = 1, result = []; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
