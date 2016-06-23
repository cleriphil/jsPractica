describe("palindrome", function() {
  it('should return true when given "eye"', function() {
    expect(palindrome("eye")).toEqual(true);
  });
  it('should return true when given a palindrome with a special character', function() {
    expect(palindrome("_eye")).toEqual(true);
  });
  it('should return true when given a palindrome with a space', function() {
    expect(palindrome("race car")).toEqual(true);
  });
  it('should return false when given a string that is not a palindrome', function() {
    expect(palindrome("not a palindrome")).toEqual(false);
  });
  it('should return true when given a palindrome with special characters, spaces and capital letters', function() {
    expect(palindrome("A man, a plan, a canal. Panama")).toEqual(true);
  });
  it('should return true when given a palindrome with multiple words and spaces', function() {
    expect(palindrome("never odd or even")).toEqual(true);
  });
  it('should return false when given "nope"', function() {
    expect(palindrome("nope")).toEqual(false);
  });
});
