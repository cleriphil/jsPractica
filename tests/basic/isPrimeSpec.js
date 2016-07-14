describe("isPrime", function() {
  it('should return false when given 0', function() {
    expect(isPrime(0)).toEqual(false);
  });
  it('should return false when given 1', function() {
    expect(isPrime(1)).toEqual(false);
  });
  it('should return true when given 2', function() {
    expect(isPrime(2)).toEqual(true);
  });
});
