const Employee = require("../lib/Employee");


test('employee defined as object', () => {
  const e = new Employee();
  expect(typeof(e)).toBe('object')
});

test('name via constructor', () => {
  const n = 'Fred';
  const e = new Employee(n);
  expect(e.name).toBe(n)
});

test('id via constructor', () => {
  const i = 10;
  const e = new Employee('Fred', i);
  expect(e.id).toBe(i)
});



test('name via getName()', () => {
  const n = 'Fred';
  const e = new Employee(n);
  expect(e.getName()).toBe(n)
});