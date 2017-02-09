const mth = require('./../src/sum');

test('adds 2 + 3 to equal 5', () => {
  expect(mth.sum(2, 3)).toBe(5);
});

test('adds 1 + 3 to equal 5', () => {
  expect(mth.sum(1, 3)).toBe(5);
});

test('multiply 2 * 3 to equal 6', () => {
  expect(mth.multiply(2, 3)).toBe(6);
});

test('multiply 3 * 4 to equal 12', () => {
  expect(mth.multiply(3, 4)).toBe(6);
});

