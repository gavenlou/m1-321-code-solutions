/* exported union */

function union(first, second) {
  var result = [];
  for (var i of first) {
    if (!result.includes(i)) result.push(i);
  }
  for (var j of second) {
    if (!result.includes(j)) result.push(j);
  }
  return result;
}
