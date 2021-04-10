/* exported compact */

function compact(array) {
  for (var i = 0, result = []; i < array.length; i++) {
    if (array[i] !== false && array[i] !== 0 && array[i] !== null &&
      array[i] !== undefined && array[i] !== '' &&
      !Number.isNaN(array[i])) result.push(array[i]);
  }
  return result;
}
