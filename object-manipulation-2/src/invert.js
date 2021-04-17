/* exported invert */

function invert(source) {
  var result = {};
  for (var x in source) {
    result[source[x]] = x;
  }
  return result;
}
