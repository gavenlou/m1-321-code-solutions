/* exported sumAll */

function sumAll(numbers) {
  for (var i = 0, total = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
