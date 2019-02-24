let string = process.argv[2];
const digraphs = function (string) {
  let len = string.length;

  for(let index=0; index < len; index++) { 
    if(string[index] == string[index+1]) {
      let subString = string[index]+string[index+1];
      console.log(subString);
    }
  }
}
digraphs(string);
