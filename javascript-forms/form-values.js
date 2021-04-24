window.addEventListener('submit', function () {
  event.preventDefault();
  var $contact = document.getElementById('contact-form');
  var elements = {};

  elements.name = $contact.elements.name.value;
  elements.email = $contact.elements.email.value;
  elements.message = $contact.elements.message.value;

  console.log(elements);
  $contact.reset();
});
