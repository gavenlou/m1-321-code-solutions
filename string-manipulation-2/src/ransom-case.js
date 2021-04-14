/* exported ransomCase */

function ransomCase(string) {
  var result = string.toLowerCase();
  for (var i = 1; i < string.length; i += 2) {
    result = result.replace(result[i], result[i].toUpperCase());
  }
  return result;
}
