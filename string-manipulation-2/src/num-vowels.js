/* exported numVowels */

function numVowels(string) {
  var result = 0;
  var i = 0;
  while (string[i]) {
    if (/[aeiou]/gi.test(string[i])) {
      result++;
    }
    i++;
  }
  return result;
}
