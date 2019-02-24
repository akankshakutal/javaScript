const oddNumber = function (num) {
  if(num % 2 != 0) {
  return true;
  }
}
let num = process.argv[2];
let isOdd = oddNumber(+num);
if(isOdd) {
console.log(num+" is a Odd number");
} else {
  console.log(num+" is not Odd number ");
}
