const addNnumbers = function(num) {
  let sum = 0;
  sum = (num*(num+1))/2;
  return sum; 
}

let num = +process.argv[2];
let sum = addNnumbers(num);
console.log(sum+" is the additon of first "+num +" numbers");
