/* exported filterOutStrings */

function filterOutStrings(values) {
  for (var i = 0, result = []; i < values.length; i++) {
    if (typeof values[i] !== 'string') result.push(values[i]);
  }
  return result;
}
