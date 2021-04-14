/* exported chunk */

function chunk(array, size) {
  var result = []; var temp = [];
  for (var i = 0; i < array.length; i++) {
    if (i % size === 0 && i !== 0) {
      result.push(temp);
      temp = [];
    }
    temp.push(array[i]);
  }
  if (array.length > 0) result.push(temp);
  return result;
}
