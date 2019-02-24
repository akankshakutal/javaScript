const oddNumSeries = function (numOfTerms) {
  let oddNumbers = [];
  count = 0;
  for(let index=0; index<=numOfTerms; index++) {
    if(index%2 != 0) {
      oddNumbers[count] = index;
      count ++
    }
  }
  return oddNumbers;
}

let numOfTerms = process.argv[2];
let oddNumbers = [];
oddNumbers = oddNumSeries(+numOfTerms);
console.log("Series of odd numbers : ");
for(let index=0; index<oddNumbers.length; index++) {
  console.log(oddNumbers[index]);
}

