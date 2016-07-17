// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
//If the word's length is even, return the middle 2 characters.

//redo with substring

function getMiddleChar(str) {
 var strLength = str.length;
 var halfIndex = strLength/2;
 if(strLength % 2 === 0) {
   return str.substring(halfIndex-1,halfIndex+1);
 } else {
   return str.substring(Math.floor(halfIndex),Math.floor(halfIndex)+1);
 }
}
