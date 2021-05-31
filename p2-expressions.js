/*
    CIT 281 Project 2
    Name: Koyin Olopade
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//returns a single, random, lowercase letter
const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    randLetter = alphabet[getRandomInteger(0,alphabet.length)];
    return randLetter;
};

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter();
}

//Returns a random length string
const getRandomString = function(minLength, maxLength){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    randString = "";
    for (let i = 0; i < getRandomInteger(minLength, maxLength + 1); i++) {
        randString += getRandomLetter();
    }
    return randString;
};
console.log(getRandomString(10,20));

//Returns a string in ascending order
const getSortedString = function(string){
    return string.split("").sort().toString().replace(/,/g, "");
};