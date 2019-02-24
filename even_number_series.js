const evenNumSeries = function (numOfTerms) {
  let evenNumbers = [];
  count = 0;
  for(let index=0; index<=numOfTerms; index++) {
    if(index%2 == 0) {
      evenNumbers[count] = index;
      count ++
    }
  }
  return evenNumbers;
}

let numOfTerms = process.argv[2];
let evenNumbers = [];
evenNumbers = evenNumSeries(+numOfTerms);
console.log("Series of even numbers : ");
for(let index=0; index<evenNumbers.length; index++) {
  console.log(evenNumbers[index]);
}

