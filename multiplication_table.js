const table = function  (num,numOfTerms) {
  for(let index=1; index<=numOfTerms; index++) {
    console.log(index*num);
  }
}

let num = +process.argv[2];
let numOfTerms = +process.argv[3];
console.log("Multiplication table of ",num," : ");
table(num ,numOfTerms);
