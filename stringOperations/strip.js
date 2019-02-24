let string = process.argv[2];
const stripString = function (string) {
  let len = string.length;
  let strip = "";

  for(index=0; index<len; index++) {
    if(string[index] != " ") {
      strip = strip+string[index];
    }
  }
  return strip;
}
let strip = stripString(string);
console.log(strip);
