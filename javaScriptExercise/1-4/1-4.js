// Case Insensitive Search
function caseInsensitiveSearch(inputString, searchItem) {
  if (!stringValidator(inputString) || !stringValidator(searchItem)) {
    return new Error(`Inputs must be string!`);
  }
  if (
    [...searchItem].includes(function (item) {
      return item === " ";
    })
  ) {
    return new Error(`Second argument just should be a word!`);
  }

  let index = inputString.toLowerCase().indexOf(searchItem.toLowerCase());
  if (index === -1) return false;
  return true;
}
console.log(caseInsensitiveSearch("hello world", "Hello"));
console.log(caseInsensitiveSearch("hello world", "hello"));
console.log(caseInsensitiveSearch("hello world", "hi"));
