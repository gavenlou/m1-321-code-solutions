function handleFocus(event) {
  console.log('Focus event fired.');
  console.log('Event target name:', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired.');
  console.log('Event target name:', event.target.name);
}

function handleInput(event) {
  console.log('Value of name:', event.target.value);
}

var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $message = document.querySelector('#user-message');

$name.addEventListener('focus', handleFocus);
$email.addEventListener('focus', handleFocus);
$message.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$email.addEventListener('blur', handleBlur);
$message.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('input', handleInput);
$message.addEventListener('input', handleInput);
