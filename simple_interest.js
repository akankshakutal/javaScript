const simpleInterest = function (amount,time,rate) {
  let si=((amount * time * rate)/100);
  return si;
}
let amount = +process.argv[2];
let time = +process.argv[3];
let rate = +process.argv[4];
let si = simpleInterest(amount,time,rate);
let statement = " rate of interest ";
let str = "is the simple interest of principle amount ";
console.log(si,str, amount+" in "+ time+" year at "+rate,statement);
