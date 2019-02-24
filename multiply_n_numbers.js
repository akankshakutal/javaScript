const multiply= function (num) {
  let mul = 1;
  for(let index=1;index<=num;index++) {
    mul = mul*index;
  }
  return mul
}
let num = process.argv[2];
let mul = multiply(+num);
console.log(mul +" is the multiplication of first "+ num+ " numbers");
