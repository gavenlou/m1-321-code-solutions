// Grabs the task-list ul
var $task = document.querySelector('.task-list');

// On click tell which tag was the target within the task list, if its BUTTON, remove the task list item closest.
$task.addEventListener('click', function () {
  if (event.target.tagName === 'BUTTON') {
    var $taskItem = event.target.closest('.task-list-item');
    $taskItem.remove();
  }
});
