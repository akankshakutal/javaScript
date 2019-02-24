let requiredPrimeTerm = process.argv[2];
const primeNumber = function (requiredPrimeTerm) {
  let primeCandidate = 1;
  let primeCount = 2;
  let reminder = 0;
  while(primeCount <= requiredPrimeTerm) {
    primeCandidate += 2;
    let isPrime = true;
    let sqrt = Math.sqrt(primeCandidate);
    for(divisor=3; divisor<=sqrt; divisor+=2) {
      reminder = primeCandidate % divisor;
      if(reminder  == 0) {
        isPrime = false;
      }
    }
    if(isPrime) {
      primeCount ++;
    }
  }
  return primeCandidate;
}
primeCandidate = primeNumber(requiredPrimeTerm);
console.log(requiredPrimeTerm,"th prime numbe is ",primeCandidate);
