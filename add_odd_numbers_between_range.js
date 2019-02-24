const addOdd = function(firstNum,lastNum) {
  let sum = 0;
  for(let index=firstNum; index<=lastNum; index++) {
    if(index == 2) {
      sum = sum+index;
    }
    if(index%2 != 0 && index != 1) {
      sum = sum+index;
    }
  }
  return sum
}
let firstNum = +process.argv[2];
let lastNum = +process.argv[3];
let sum = addOdd(firstNum,lastNum);
let str =" is the Addition of all odd numbers between  ";
console.log(sum,str,firstNum +" to "+lastNum);
