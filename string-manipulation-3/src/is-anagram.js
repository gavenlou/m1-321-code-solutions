/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var first = firstString.replace(/ /g, '');
  var second = secondString.replace(/ /g, '');

  if (first.length !== second.length) return false;

  for (var i of first) {
    if (!secondString.includes(i)) return false;
  }
  for (var j of second) {
    if (!firstString.includes(j)) return false;
  }

  return true;
}
