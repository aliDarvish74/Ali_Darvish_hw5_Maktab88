// Categorized array elements
function category(inputArray) {
  if (!arrayValidator(inputArray)) {
    return new Error(`Pleas enter an array!`);
  }
  if (
    inputArray.filter(function (item) {
      return item.length !== 7;
    }).length !== 0
  ) {
    return new Error(`Array elements must be in right format ( "a-b-c-d" )`);
  }

  let firstPlace = new Set();
  let secondPlace = new Set();
  let thirdPlace = new Set();
  let fourthPlace = new Set();
  for (let i = 0; i < inputArray.length; i++) {
    let code = inputArray[i].split("-");
    firstPlace.add(code[0]);
    secondPlace.add(code[1]);
    thirdPlace.add(code[2]);
    fourthPlace.add(code[3]);
  }
  let result = [];
  result.push(
    Array.from(firstPlace),
    Array.from(secondPlace),
    Array.from(thirdPlace),
    Array.from(fourthPlace)
  );
  return result;
}

console.log(
  category(["a-b-c-d", "a-b-f-g", "m-n-l-k", "m-o-p-j", "v-q-w-e", "x-z-p-j"])
);
