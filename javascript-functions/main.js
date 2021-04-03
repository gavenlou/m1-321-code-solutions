function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hey, ' + name + '!';
}

var greetResult = greet('Brett');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(32, 17);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Gaven', lastName: 'Loughridge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResult = getLastElement(['Hey', 'what\'s', 'up', 'bro']);
console.log('getLastElementResult:', getLastElementResult);
