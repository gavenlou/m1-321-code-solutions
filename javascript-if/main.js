/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  if (number % 2 === 0) return true;
  else return false;
}

function startsWithJ(string) {
  if (string[0] === 'J') return true;
  else return false;
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) return 'neutral';
  else if (pH < 7 && pH >= 0) return 'acid';
  else if (pH > 7 && pH <= 14) return 'base';
  else return 'invalid pH level';
}

function introduceWarnerBro(name) {
  if (name.toUpperCase() === 'YAKKO' || name.toUpperCase() === 'WAKKO') return 'We\'re the warner brothers!';
  else if (name.toUpperCase() === 'DOT') return 'I\'m cute~';
  else return 'Goodnight everybody!';
}
