const cubeOfNumber = function (num) {
  let cube = num*num*num;
  return cube;
}
let num = process.argv[2];
let cube = cubeOfNumber(+num);
console.log(cube+" is the cube of "+num);
