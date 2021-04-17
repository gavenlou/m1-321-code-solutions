var clickCount = 0;
var hotButton = document.querySelector('.hot-button');
var clicks = document.querySelector('.click-count');

hotButton.addEventListener('click', event => {
  clickCount++;
  clicks.textContent = 'Clicks:' + ' ' + clickCount;
  if (clickCount <= 3) hotButton.className = 'hot-button cold';
  else if (clickCount >= 4 && clickCount <= 6) hotButton.className = 'hot-button cool';
  else if (clickCount >= 7 && clickCount <= 9) hotButton.className = 'hot-button tepid';
  else if (clickCount >= 10 && clickCount <= 12) hotButton.className = 'hot-button warm';
  else if (clickCount >= 13 && clickCount <= 15) hotButton.className = 'hot-button hot';
  else hotButton.className = 'hot-button nuclear';
});
