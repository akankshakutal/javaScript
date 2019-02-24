let string = process.argv[2];
const intersperse = function (string) {
  let len = string.length;
  let delimeter = ",";
  let intersperse = "";

  for(let index=0; index<len-1; index++) {
    intersperse = intersperse + string[index] + delimeter;
  }
  intersperse = intersperse + string[len-1];
  return intersperse;
}
let stringWithDilimiter = intersperse(string);
console.log(stringWithDilimiter);
