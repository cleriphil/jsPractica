// simple recursion
// no spec

var countDownFrom = function(num){
  if (num === 0) return;
  console.log(num);
  countDownFrom(num - 1);
}
