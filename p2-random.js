/*
    CIT 281 Project 2
    Name: Koyin Olopade
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}

//console.log(result);

//returns a single, random, lowercase letter
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    randLetter = alphabet[getRandomInteger(0,alphabet.length)];
    return randLetter;
};

//Returns a random length string
function getRandomString(minLength, maxLength){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    randString = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength + 1); i++) {
        randString += getRandomLetter();
    }
    return randString;
};
console.log(getRandomString(10,20));

//Returns a string in ascending order
function getSortedString(string){
    return string.split("").sort().toString().replace(/,/g, "");
};