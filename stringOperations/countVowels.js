let string = process.argv[2];
const countVowels = function (string) {
  let len = string.length;
  let vowels = "AEIOUaeiou";
  let count = 0;

  for(let index=0; index<len; index++) {
    for(let ind=0; ind<vowels.length; ind++) {
      if(string[index] == vowels[ind]) {
        count ++;
      }
    }
  }
  return count;
}

let count = countVowels(string);
console.log(count);
