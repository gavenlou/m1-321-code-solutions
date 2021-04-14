/* exported capitalizeWord */

function capitalizeWord(word) {
  var result = word.toLowerCase();
  if (result !== 'javascript') {
    return result.replace(word[0], word[0].toUpperCase());
  }
  result = result.replace(result[0], result[0].toUpperCase());
  return result.replace(result[4], result[4].toUpperCase());
}
