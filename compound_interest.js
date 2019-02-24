const compoundInterest = function (amount,rate,time) {
  let value = Math.pow((1+(rate/100)),time);
  let ans = (amount*(value))-amount;
  return ans;
}

let amount = process.argv[2];
let time = process.argv[3];
let rate = process.argv[4];
let ci = compoundInterest(+amount,+rate,+time);
let str="is the compound interest of ";
console.log(ci,str,amount + " in "+time+" years at "+rate);
