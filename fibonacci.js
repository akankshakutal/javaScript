const fibonacciSeries = function (numOfTerms) {
  let firstNum = 0;
  let secondNum = 1;
  let thirdNum = 0;

  console.log(firstNum);
  console.log(secondNum);

  for( let index=2; index<numOfTerms; index++) {
    thirdNum =(firstNum + secondNum);
    console.log(thirdNum);
    firstNum = secondNum;
    secondNum = thirdNum;
  }
}

let numOfTerms = process.argv[2];
console.log("Fibonacci series : ");
fibonacciSeries(+numOfTerms);
