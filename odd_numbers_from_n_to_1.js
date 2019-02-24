const oddNumSeries = function (firstNum,lastNum) {
  let oddNumbers = [];
  count = 0;
  if(firstNum < lastNum) {
    for(let index=lastNum; index>=firstNum; index--) {
      if(index%2 != 0) {
        oddNumbers[count] = index;
        count ++
      }
    }
  } else  {
    oddNumbers[0] = "wrong input" ;
  }

    return oddNumbers;
}

let firstNum = process.argv[2];
let lastNum = process.argv[3];
let oddNumbers = [];
oddNumbers = oddNumSeries(+firstNum,+lastNum);
if(oddNumbers[0] != "wrong input") {
  console.log("Series of odd numbers from ",lastNum," to ",firstNum);
}
for(let index=0; index<oddNumbers.length; index++) {
  console.log(oddNumbers[index]);
}

