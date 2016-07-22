// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
//If the word's length is even, return the middle 2 characters.

//redo with substr

function getMiddleChar(str) {
 var strLength = str.length;
 var half = strLength/2;
 var roundHalf = Math.floor(half);
 console.log(half);
 return strLength % 2 === 0 ? str.substring(half - 1, half + 1) : str.substring(roundHalf, roundHalf + 1);
}
