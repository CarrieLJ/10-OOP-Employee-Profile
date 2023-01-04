const { default: test } = require('node:test');
const employee = require('./Employee');


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});