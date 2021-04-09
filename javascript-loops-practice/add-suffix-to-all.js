/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  for (var i = 0, result = []; i < words.length; i++) {
    result.push(words[i] + suffix);
  }
  return result;
}
