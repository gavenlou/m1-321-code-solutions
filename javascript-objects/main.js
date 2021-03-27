var student = {
  firstName: 'Gaven',
  lastName: 'Loughridge',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'General Sales';

console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

var vehicle = {
  make: 'Porsche',
  model: 'Taycan Turbo S',
  year: 2021
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

var pet = {
  name: 'Apollo',
  type: 'Reptile'
};

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);
