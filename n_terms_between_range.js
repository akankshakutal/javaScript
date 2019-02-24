const nthTerms = function (firstNum,lastNum,commonDiff) {
  for(let index=firstNum; index<=lastNum; index+=commonDiff) {
    console.log(index);
  }
}

let firstNum = +process.argv[2];
let lastNum = +process.argv[3];
let commonDiff = +process.argv[4];
console.log("",commonDiff,"th terms between ",firstNum,lastNum);
nthTerms(firstNum,lastNum,commonDiff);
