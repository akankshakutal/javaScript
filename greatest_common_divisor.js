const greatestCommonDovisor = function (firstNum,secondNum) {
  let gcd = 0;

  let min=Math.min(firstNum,secondNum);

  for( let index=1; index<=min; index++) {
    if(firstNum%index == 0 && secondNum%index == 0) {
      gcd = index;
    }
  }
  return gcd;
}
let firstNum = process.argv[2];
let secondNum = process.argv[3];
let gcd = greatestCommonDovisor(+firstNum,+secondNum);
console.log(gcd+" is the GCD of "+firstNum+ " " + secondNum);
