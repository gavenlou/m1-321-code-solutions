var colors = ['red', 'white', 'blue'];

console.log('Index [0]:', colors[0]);
console.log('Index [1]:', colors[1]);
console.log('Index [2]:', colors[2]);

console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

console.log('Colors array:', colors);

var students = ['Tom', 'Bob', 'Ross', 'Kyle'];

var numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'students in the class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('The last student in the array is', lastStudent + '.');
console.log('Value of students:', students);
