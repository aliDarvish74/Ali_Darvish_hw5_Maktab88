// Flat without Flat Method

function flatten(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let item = input[i];
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      result = result.concat(flatten(item));
    }
  }
  return result;
}

function flatArray(inputArray) {
  if (!arrayValidator(inputArray)) {
    return new Error(`Input must be an array!`);
  }
  return flatten(inputArray);
}

let testArray = [1, [2], [3, [4, [5, 6]], [[7]], [8, [[[9]]], 10], 11, 12]];
console.log(flatArray(testArray));
