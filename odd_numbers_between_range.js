const oddNumSeries = function (firstNum,lastNum) {
  let oddNumbers = [];
  count = 0;
  for(let index=firstNum; index<=lastNum; index++) {
    if(index%2 != 0) {
      oddNumbers[count] = index;
      count ++
    }
  }
  return oddNumbers;
}

let firstNum = process.argv[2];
let lastNum = process.argv[3];
let oddNumbers = [];
oddNumbers = oddNumSeries(+firstNum,+lastNum);
console.log("Series of odd numbers from ",firstNum," to ",lastNum);
for(let index=0; index<oddNumbers.length; index++) {
  console.log(oddNumbers[index]);
}

