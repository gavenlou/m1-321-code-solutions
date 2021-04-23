var $chars = document.querySelectorAll('span');
var count = 0;
var correct = 0;
var typed = 0;
var $modal = document.querySelector('.modal');
var $acc = document.querySelector('#accuracy');
var accuracy = 0;

window.addEventListener('keydown', function () {
  if (event.key === $chars[count].textContent && count < $chars.length) {
    $chars[count].className = 'correct';
    count++;
    correct++;
    typed++;
    if (count < $chars.length) {
      $chars[count].className = 'current';
    }
    if (count >= $chars.length) {
      accuracy = Math.round((correct / typed) * 100);
      $modal.style.display = 'block';
      $acc.textContent = 'Your accuracy was: ' + accuracy + '%';
    }
  } else {
    if (event.key !== 'Shift') {
      $chars[count].className = 'incorrect';
      typed++;
    }
  }
});
// eslint-disable-next-line no-unused-vars
function reset() {
  count = 0;
  typed = 0;
  correct = 0;
  $chars.forEach(function (currentValue, currentIndex) {
    $chars[currentIndex].className = '';
  });
  $chars[0].className = 'current';
  $modal.style.display = 'none';
}
