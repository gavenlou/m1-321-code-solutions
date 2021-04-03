var num1 = 1; var num2 = 2; var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

var heroes = ['Homelander', 'Deadpool', 'Iron Man', 'Spider Man'];
var randomNumber = Math.random();
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [{
  title: 'The Name of the Wind',
  author: 'Patrick Rothfuss'
},
{
  title: 'Blink: The Power of Thinking Without Thinking',
  author: 'Malcolm Gladwell'
},
{
  title: 'HTML for DUMMIES',
  author: 'Ed Tittel'
}];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library:', library);

var fullName = 'Gaven Loughridge';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
