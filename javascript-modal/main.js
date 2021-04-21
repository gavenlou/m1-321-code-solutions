var modal = document.querySelector('.hidden');

// eslint-disable-next-line no-unused-vars
function toggle(state) {
  switch (state) {
    case 'on':
      modal.className = 'hidden show';
      break;
    case 'off':
      modal.className = 'hidden none';
      break;
    default:
      // do nothing
  }
}
