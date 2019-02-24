let superString = process.argv[2];
let requiredSubString = process.argv[3];
const subString = function (superString,requiredSubString) {
  let superLen = superString.length;
  let subLen = requiredSubString.length;
  let subString = "";
  let count = 0;

  for(let superIndex=0; superIndex<superLen; superIndex++) {
    subString = "";

    for(let subIndex= superIndex; subIndex< superIndex+subLen; subIndex++) {
      subString = subString + superString[subIndex];
    }

    if(subString == requiredSubString) {
      count ++;
    }

  }
return count;
}
let count = subString(superString,requiredSubString);
console.log(count);
