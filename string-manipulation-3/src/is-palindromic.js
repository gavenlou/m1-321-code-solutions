/* exported isPalindromic */

function isPalindromic(string) {
  var reverse = '';
  var noSpace = string.replace(/ /g, '');
  for (var i = noSpace.length - 1; i >= 0; i--) {
    reverse += noSpace[i];
  }
  if (reverse === noSpace) return true;
  else return false;
}
