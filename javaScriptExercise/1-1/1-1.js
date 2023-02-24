// Find array depth
function getArrayDepth(input) {
  return Array.isArray(input)
    ? 1 + Math.max(0, ...input.map(getArrayDepth))
    : 0;
}

function arrayDepth(inputArray) {
  if (!arrayValidator(inputArray)) {
    return new Error(`Input must be an array`);
  }
  return getArrayDepth(inputArray);
}

let testArray = [1, 2, [3, 4, [5, 6], 7, [8, [9, 91]], 10], 11, 12];
console.log(arrayDepth(testArray));
