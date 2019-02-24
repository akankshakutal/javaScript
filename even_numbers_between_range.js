const evenNumSeries = function (firstNum,lastNum) {
  let evenNumbers = [];
  count = 0;
  for(let index=firstNum; index<=lastNum; index++) {
    if(index%2 == 0) {
      evenNumbers[count] = index;
      count ++
    }
  }
  return evenNumbers;
}

let firstNum = process.argv[2];
let lastNum = process.argv[3];
let evenNumbers = [];
evenNumbers = evenNumSeries(+firstNum,+lastNum);
console.log("Series of even numbers from ",firstNum," to ",lastNum);
for(let index=0; index<evenNumbers.length; index++) {
  console.log(evenNumbers[index]);
}

