let centigrade = +process.argv[2];

const fahrenheitToCentigrade = function(centigrade) {
    let fahrenheit = 0;
    fahrenheit=(((+centigrade*9)/5)+32);
    return fahrenheit;
}

let fahrenheit = fahrenheitToCentigrade(centigrade);
console.log(fahrenheit + " is the value of " + centigrade);
