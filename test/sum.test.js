const mth = require('./../src/sum');

test('adds 2 + 3 to equal 5', () => {
  expect(mth.sum(2, 3)).toBe(5);
});

test('multiply 2 * 3 to equal 6', () => {
  expect(mth.multiply(2, 3)).toBe(6);
});

