let string = process.argv[2];
const palindrome = function (string) {
  let len = string.length;
  let reverseString = "";
  let msg = "";

  for(index=len-1; index>=0; index--) {
    reverseString = reverseString + string[index];
  }

  if(string == reverseString) {
    msg = "String is Palindrome";
  }

  if(string != reverseString) {
    msg = "String is not Palindrome";
  }
  return msg
}

let msg = palindrome(string);
console.log(msg);
