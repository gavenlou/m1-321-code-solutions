/* exported reverseWords */

function reverseWords(string) {
  var words = string.split(' ');
  var result = '';
  for (var i of words) {
    for (var j = i.length - 1; j >= 0; j--) {
      result += i[j];
    }
    if (i === words[words.length - 1]) return result;
    else result += ' ';
  }
}
