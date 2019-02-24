const average = function (firstNum,secondNum,thirdNum) {
  let avg = 0;
  avg =(firstNum+secondNum+thirdNum)/3;
  return avg;
}
let firstNum = +process.argv[2];
let secondNum = +process.argv[3];
let thirdNum = +process.argv[4];
let avg = average(firstNum,secondNum,thirdNum)
let str = " is the average of ";
console.log(avg,str,firstNum +" "+secondNum+" "+thirdNum );
