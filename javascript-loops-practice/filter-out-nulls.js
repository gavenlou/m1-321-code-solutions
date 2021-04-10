/* exported filterOutNulls */

function filterOutNulls(values) {
  for (var i = 0, result = []; i < values.length; i++) {
    if (values[i] != null) result.push(values[i]);
  }
  return result;
}
