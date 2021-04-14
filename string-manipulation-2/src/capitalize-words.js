/* exported capitalizeWords */

function capitalizeWords(string) {
  var result = string.toLowerCase();
  result = result.replace(result[0], result[0].toUpperCase());
  for (var i = 0; i < string.length; i++) {
    if (result[i - 1] === ' ') {
      result = result.substring(0, i) + result[i].toUpperCase() + result.substring(i + 1);
    }
  }
  return result;
}
