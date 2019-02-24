let requiredPrimeTerm = +process.argv[2];
const nthPrimeNumber = function (requiredPrimeTerm) {
  let primeCandidate = 1;
  let primeCount = 2;
  let msg = "";

  if(requiredPrimeTerm <= 0) {
    msg = requiredPrimeTerm+" is invalid input ";
  } 

  if(requiredPrimeTerm == 1) {
    msg = "1 st prime number is 2 ";
  }

  while(primeCount <= requiredPrimeTerm) {
    primeCandidate += 2;
    let isPrime = true;
    let sqrt = Math.sqrt(primeCandidate);
    let divisor = 3;
    while(divisor <= sqrt && isPrime) { 
      reminder = primeCandidate % divisor;
      if(reminder == 0){
        isPrime = false;
      }
      divisor += 2;
    }
    if(isPrime) {
      primeCount ++;
      msg = requiredPrimeTerm+"th prime term is "+primeCandidate;
    }
  }
  return msg;
}

let msg = nthPrimeNumber(requiredPrimeTerm);
console.log(msg);
