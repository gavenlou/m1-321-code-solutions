var $tab = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tab.addEventListener('click', function () {
  if (event.target.matches('.tab')) {
    var data = event.target.getAttribute('data-view');
    for (var x of $tabList) {
      if (x === event.target) x.className = 'tab active';
      else x.className = 'tab';
    }
    for (var y of $viewList) {
      if (y.getAttribute('data-view') === data) y.className = 'view';
      else y.className = 'view hidden';
    }
  }
});
