/* exported getValues */

function getValues(object) {
  var x;
  var result = [];
  for (x in object) {
    result.push(object[x]);
  }
  return result;
}
