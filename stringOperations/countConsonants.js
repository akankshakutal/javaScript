let string = process.argv[2];
const countConsonants = function(string) {
  let len = string.length;
  let consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
  let count = 0;

  for(index=0; index < len; index++) {
    let isConsonant = false;
    for(ind=0; ind < consonants.length; ind++) {
      if(string[index] == consonants[ind]) {
        count++;
      }
    }
  }
  return count; 
}
let count = countConsonants(string);
console.log(count);

