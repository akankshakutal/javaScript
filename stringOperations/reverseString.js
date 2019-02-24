let string = process.argv[2];
const reverse = function (string) {
  let len = string.length;
  let reverseString = "";

  for(index=len-1; index>=0; index--) {
    reverseString = reverseString + string[index];
  }
  return reverseString;
}
let reverseString = reverse(string);
console.log(reverseString);
