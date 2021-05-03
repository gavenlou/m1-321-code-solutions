/* exported flatten */

function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j of array[i]) {
        result.push(j);
      }
    } else result.push(array[i]);
  }
  return result;
}
