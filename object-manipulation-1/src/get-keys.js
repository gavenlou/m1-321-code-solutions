/* exported getKeys */

function getKeys(object) {
  var x;
  var result = [];
  for (x in object) {
    result.push(`${x}`);
  }
  return result;
}
