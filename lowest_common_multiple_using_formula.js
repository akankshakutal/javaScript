let firstNum = 49;
let secondNum = 143;
let min = 0;
let gcd = 0;
let lcm = 0;

min=Math.min(firstNum,secondNum);

for( let index=1; index<=min; index++) {
  if(firstNum%index == 0 && secondNum%index == 0) {
    gcd = index;
  }
}
lcm = (firstNum*secondNum)/gcd;
console.log(lcm+" is the LCM of "+firstNum+ " " + secondNum);
