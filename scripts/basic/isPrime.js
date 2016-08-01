// Define a function isPrime that takes one integer argument and returns true or false
//depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1
// that has no positive divisors other than 1 and itself.

function isPrime(num){

}


var countDownFrom = function(num){
  var currentNum = num - 1;
  console.log(currentNum);
  if (currentNum > 0){
    countDownFrom(currentNum);
  }
}
