const multiplication = function (firstNum,lastNum) {
  let mul = 1;
  for(let index=firstNum; index<=lastNum; index++) {
    mul = mul*index;
  }
  return mul; 
}

let firstNum = process.argv[2];
let lastNum = process.argv[3];
let mul = multiplication(firstNum,lastNum);
console.log(mul+" is the Multiplication of "+firstNum +" to "+lastNum);

