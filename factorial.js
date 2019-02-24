const fact = function (num) {
  let factorial = 1;
  for(let index=1; index<=num; index++) {
    factorial = factorial*index;
  }
  return factorial;
}
let num = process.argv[2];
let factorial = fact(+num);
console.log(factorial +" is the factorial of "+ num);
