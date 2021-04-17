/* exported omit */

function omit(source, keys) {
  var result = {};
  for (var x in source) {
    if (!keys.includes(x)) result[x] = source[x];
  }
  return result;
}
