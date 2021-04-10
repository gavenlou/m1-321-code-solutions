/* exported isVowel */

function isVowel(char) {
  char = char.toUpperCase();
  return (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U');
}
