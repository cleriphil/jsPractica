function palindrome(str){
  var cleanStr = str.replace(/[\s\W]|_/g, '').toLowerCase();
  var reverse = cleanStr.split('').reverse().join('');
  return reverse === cleanStr;
}
