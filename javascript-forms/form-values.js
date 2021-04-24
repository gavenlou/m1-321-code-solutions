var $contact = document.getElementById('contact-form');
var elements = {};

$contact.addEventListener('submit', function () {
  event.preventDefault();

  elements.name = $contact.elements.name.value;
  elements.email = $contact.elements.email.value;
  elements.message = $contact.elements.message.value;

  console.log(elements);
  $contact.reset();
});
