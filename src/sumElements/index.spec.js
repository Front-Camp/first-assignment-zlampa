import sumElements from './index';

describe('sumElements::', () => {
  /** @test {sumElements} */
  it('should return sum of the array elements', () => {
    expect(sumElements([1, 2])).toBe(3);
    expect(sumElements([1, '2'])).toBe(3);
  });

  /** @test {sumElements} */
  it('should ignore -Infinity/Infinity', () => {
    expect(sumElements([Infinity, 1, 2])).toBe(3);
  });

  /** @test {sumElements} */
  it('should ignore NaN', () => {
    expect(sumElements([NaN, 3, -1])).toBe(2);
  });
});
