const temperature = function (fahrenheit) { 
  let centigrade = (((fahrenheit-32)/9)*5);
  return centigrade;
}

let fahrenheit = process.argv[2];
let centigrade = temperature(+fahrenheit);
console.log(centigrade + " is the Centigrade value of "+ fahrenheit);

