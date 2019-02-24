const add = function(num) {
  let sum = 0;
  for(let index=1;index<=num;index++) {
    sum = sum+index;
  }
  return sum;
}
let num = +process.argv[2];
let sum = add(num);
console.log(sum +" is the sum of first "+ num+ " numbers");
