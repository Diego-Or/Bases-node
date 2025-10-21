// AAA = Arrange, Act, Assert
describe('Test in the App File.', () => {
  test('should be 30', () => {
    
    // 1. Arrange
    const numb1 = 10;
    const numb2 = 20;

    // 2. Act
    const result = numb1 + numb2;

    // 3. Assert
    expect(result).toBe(30)

  });
});