describe("factorialize", function() {
  xit('should return a number', function(){
    expect(factorialize(5)).toEqual(jasmine.any(Number));
  });
  xit('should return 120 when given 5', function(){
    expect(factorialize(5)).toBe(120);
  });
  xit('should return 3628800 when given 10', function(){
    expect(factorialize(10)).toBe(3628800);
  });
  xit('should return 2432902008176640000 when given 20', function(){
    expect(factorialize(20)).toBe(2432902008176640000);
  });
  xit('should return 1 when given 0', function(){
    expect(factorialize(0)).toBe(1);
  });
});
