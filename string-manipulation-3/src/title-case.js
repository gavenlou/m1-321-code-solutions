/* exported titleCase */

function titleCase(title) {
  var words = title.split(' ');
  var result = '';
  var prev = '';
  for (var i of words) {
    if (/javascript:?/g.test(i.toLowerCase())) result += 'JavaScript' + i.slice(10);
    else if (i.toLowerCase() === 'api') result += 'API';
    else if (i.toLowerCase() === 'web') result += 'Web';
    else if (i.includes('-')) result += i.charAt(0).toUpperCase() + i.slice(1, i.indexOf('-') + 1) + i.charAt(i.indexOf('-') + 1).toUpperCase() + i.slice(i.indexOf('-') + 2);
    else if (i.length > 3) result += i.charAt(0).toUpperCase() + i.slice(1);
    else if (prev.includes(':')) result += i.charAt(0).toUpperCase() + i.slice(1);
    else if (i === words[0]) result += i.charAt(0).toUpperCase() + i.slice(1);
    else result += i;

    if (i === words[words.length - 1]) return result;
    else result += ' ';
    prev = i;
  }
}
