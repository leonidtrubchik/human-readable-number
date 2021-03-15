module.exports = function toReadable (number) {
    if (number < 20) {
        return readableUnits(number);
    } else if (number >= 20 && number < 100) {
        return readableDozens(number);
    } else return readableHunbreds(number);
        
    
}

const firstTwoDecades = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
];

const dozens = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
];


function readableUnits(n) {
    return firstTwoDecades[n];
}

function readableDozens(n) {
    let unit = firstTwoDecades[n%10];
    let dozen = dozens[Math.floor(n/10) - 2];

    if (n%10 == 0) {
        return dozen;
    } else {
        return dozen + " " + unit; 
    }
}

function readableHunbreds(n) {
    let hundred = firstTwoDecades[Math.floor(n/100)] + " " + "hundred";
    let dozensOfHundred = n%100;
    
    if (dozensOfHundred < 20 && dozensOfHundred != 0) {
        return hundred + " " + readableUnits(dozensOfHundred);
    } else if (dozensOfHundred >= 20 && dozensOfHundred < 100) {
        return hundred + " " + readableDozens(dozensOfHundred);
    } else return hundred;
}