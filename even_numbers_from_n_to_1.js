const evenNumSeries = function (firstNum,lastNum) {
  let evenNumbers = [];
  count = 0;
  if(firstNum < lastNum) {
    for(let index=lastNum; index>=firstNum; index--) {
      if(index%2 == 0) {
        evenNumbers[count] = index;
        count ++
      }
    }
  } else  {
    evenNumbers[0] = "wrong input" ;
  }

    return evenNumbers;
}

let firstNum = process.argv[2];
let lastNum = process.argv[3];
let evenNumbers = [];
evenNumbers = evenNumSeries(+firstNum,+lastNum);
if(evenNumbers[0] != "wrong input") {
  console.log("Series of even numbers from ",lastNum," to ",firstNum);
}
for(let index=0; index<evenNumbers.length; index++) {
  console.log(evenNumbers[index]);
}

