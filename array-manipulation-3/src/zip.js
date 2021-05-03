/* exported zip */

function zip(first, second) {
  var length = first.length;
  var result = [];
  var temp = [];

  if (length > second.length) length = second.length;
  for (var i = 0; i < length; i++) {
    temp.push(first[i], second[i]);
    result.push(temp);
    temp = [];
  }
  return result;
}
