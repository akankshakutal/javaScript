const squareOfNumber = function (num) {
  let square = 0;
  square = num*num;
  return square;
}
let num = process.argv[2];
let square = squareOfNumber(num);
console.log(square+" is the square of "+num);
