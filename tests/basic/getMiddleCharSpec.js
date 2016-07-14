describe("getMiddleChar", function(){
  it('should return "es" when given "test"', function(){
    expect(getMiddleChar("test").toEqual("es"));
  });
  it('should return "t" when given "testing"', function(){
    expect(getMiddleChar("testing").toEqual("t"));
  });
  it('should return "dd" when given "middle"', function(){
    expect(getMiddleChar("middle").toEqual("dd"));
  });
  it('should return "A" when given "A"', function(){
    expect(getMiddleChar("A").toEqual("A"));
  });
});
