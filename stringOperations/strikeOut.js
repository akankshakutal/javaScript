let string = process.argv[2];
let letter = process.argv[3];
const strikeOut = function (string,letter) {
  let len = string.length;
  let outputString = "";

  for(index=0; index<len; index++) {

    if(string[index] == letter) {
      outputString = outputString + "-";
    }

    if(string[index] != letter) {
      outputString = outputString + string[index];
    }

  }
  return outputString;
}
let outputString = strikeOut(string,letter);
console.log(outputString);
