/* exported intersection */

function intersection(first, second) {
  var result = [];
  for (var i of first) {
    for (var j of second) {
      if (i === j && !result.includes(j)) result.push(j);
    }
  }
  return result;
}
