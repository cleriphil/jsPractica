describe("findLongestWord", function() {
  it("should return a number when given a string", function() {
    expect(findLongestWord("The quick brown fox jumped over the lazy dog")).toEqual(jasmine.any(Number));
  });
  it("should return 6 when 'jumped' is the longest word", function() {
    expect(findLongestWord("The quick brown fox jumped over the lazy dog")).toEqual(6);
  });
  it("should return 5 when 'force' is the longest word", function() {
    expect(findLongestWord("May the force be with you")).toEqual(5);
  });
  it("should return 6 when 'barrel' is the longest word", function() {
    expect(findLongestWord("Google do a barrel roll")).toEqual(6);
  });
  it("should return 8 when 'velocity' is the longest word", function() {
    expect(findLongestWord("What is the average airspeed velocity of an unladen swallow")).toEqual(8);
  });
  it("should return 19 when 'otorhinolaryngology' is the longest word", function() {
    expect(findLongestWord("What if we try a super-long word such as otorhinolaryngology")).toEqual(19);
  });
});
