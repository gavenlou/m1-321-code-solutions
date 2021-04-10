/* exported oddOrEven */

function oddOrEven(numbers) {
  for (var i = 0, result = []; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) result.push('even');
    else if (numbers[i] % 2 !== 0) result.push('odd');
    else result.push('NaN');
  }
  return result;
}
