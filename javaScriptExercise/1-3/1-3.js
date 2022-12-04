// Seperate place values
function seperator(input) {
  if (!integerNumberValidator(input)) {
    return new Error(`Input must be an integer number!`);
  }
  let sign = "";
  let arrayInput = [...String(input)];
  if (arrayInput[0] === "-") {
    arrayInput.splice(0, 1);
    sign = "-";
  }
  let reverseArrayInput = arrayInput.reverse();
  let reverseResult = "";
  while (reverseArrayInput.length > 3) {
    reverseResult += reverseArrayInput.splice(0, 3).join("") + ",";
  }
  reverseResult += reverseArrayInput.join("");

  return sign + [...reverseResult].reverse().join("");
}
console.log(seperator(-1518851545));
