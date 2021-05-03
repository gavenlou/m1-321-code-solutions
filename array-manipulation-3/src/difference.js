/* exported difference */

function difference(first, second) {
  var result = [];
  for (var i of second) {
    for (var j of first) {
      if (!second.includes(j) && !result.includes(j)) result.push(j);
    }
    if (!first.includes(i) && !result.includes(i)) result.push(i);
  }
  return result;
}
