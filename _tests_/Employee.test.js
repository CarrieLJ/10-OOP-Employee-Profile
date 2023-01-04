const { getMaxListeners } = require("process");
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

test('email via constructor', () => {
  const m = 'name@gmail.com';
  const e = new Employee('Fred', 10, 'name@gmail.com');
  expect(e.email).toBe(m)
});

test('name via getName()', () => {
  const n = 'Fred';
  const e = new Employee(n);
  expect(e.getName()).toBe(n)
});

test('id via getId()', () => {
  const i = 10;
  const e = new Employee('Fred', i);
  expect(e.getId()).toBe(i)
});

test('email via getEmail()', () => {
  const m = 'name@gmail.com';
  const e = new Employee('Fred', 10, 'name@gmail.com');
  expect(e.getEmail()).toBe(m)
});

test('role via getRole()', () => {
  const r = 'Engineer';
  const e = new Employee(r);
  expect(e.getRole()).toBe(r)
});