var light = document.querySelector('.light');
var sky = document.querySelector('body');

light.addEventListener('click', function () {
  if (light.className === 'light') {
    light.className = 'dark';
    sky.className = 'night';
  } else {
    light.className = 'light';
    sky.className = 'day';
  }
});
