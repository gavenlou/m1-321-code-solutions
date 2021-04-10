/* exported reverseWord */

function reverseWord(word) {
  for (var i = word.length - 1, result = ''; i >= 0; i--) {
    result += word[i];
  }
  return result;
}
