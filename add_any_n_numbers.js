let a = +process.argv[2];
let b = +process.argv[3];

const addition = function (firstNum,lastNum) {
 let sum = 0;
 if(firstNum < lastNum) {
  for(let index=firstNum; index<=lastNum; index++) {
    sum = sum+index;
  }
 } else {
   sum = "Invalid Input";
 }
 return sum;
}

let sum = addition(a,b);
console.log(sum);
