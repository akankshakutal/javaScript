const largestNumber = function (firstNum,secondNum,thirdNum) {
  let largestNum =Math.max(firstNum,secondNum,thirdNum);
  return largestNum;
}
let firstNum = process.argv[2];
let secondNum = process.argv[3];
let thirdNum = process.argv[4];
let str = "is the largest number in ";
let largestNum = largestNumber(firstNum,secondNum,thirdNum);
console.log(largestNum,str, firstNum+" "+secondNum+" "+thirdNum);
