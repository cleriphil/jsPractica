describe("reverseString", function() {
  it('should reverse a word in all lowercase', function() {
    expect(reverseString('hello')).toBe('olleh');
  });
  it('should reverse a word with a capital and lowercase letters', function() {
    expect(reverseString('youTube')).toBe('ebuTuoy');
  });
  it('should reverse a phrase with spaces', function() {
    expect(reverseString('Welcome to Portland')).toBe('dnaltroP ot emocleW');
  })
});
