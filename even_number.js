const evenNumber = function (num) {
  if(num % 2 == 0) {
  return true;
  }
}
let num = process.argv[2];
let isEven = evenNumber(+num);
if(isEven) {
console.log(num+" is a even number");
} else {
  console.log(num+" is not even number ");
}
