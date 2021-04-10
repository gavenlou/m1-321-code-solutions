/* exported capitalize */

function capitalize(word) {
  word = word.toLowerCase();
  return word.replace(word[0], word[0].toUpperCase());
}
