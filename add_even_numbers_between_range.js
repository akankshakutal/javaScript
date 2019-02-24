const addEven = function(firstNum,lastNum) {
  let sum = 0;
  if(firstNum < lastNum) {
    for(let index=firstNum; index<=lastNum; index++) {
      if(index%2 == 0) {
        sum = sum+index;
      }
    }
  } else {
    sum = "Invalid Input";
  }
  return sum;
}

let firstNum = +process.argv[2];
let lastNum = +process.argv[3];
let sum = addEven(firstNum,lastNum);

console.log(sum);
