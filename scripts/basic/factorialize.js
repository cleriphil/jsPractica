function factorialize(num) {
  var result = 1;
  for(x=num;x>=1;x--) {
    result *= x;
  }
  return result;
}
