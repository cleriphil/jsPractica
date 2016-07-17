// You are going to be given a word.
// Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
//If the word's length is even, return the middle 2 characters.

function getMiddleChar(str) {
 var strLength = str.length;
 var arr = str.split("");
 var middle = "";
 var halfIndex = strLength/2;
 if(strLength % 2 === 0) {
   middle += (arr[halfIndex - 1]) += (arr[halfIndex]);
 } else {
   middle += arr[Math.floor(halfIndex)];
 }
 return middle;
}
