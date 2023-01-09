// const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


// test('engineer defined as object', () => {
//   const e = new Engineer();
//   expect(typeof(e)).toBe('object')
// });

test('school via constructor', () => {
  const s = 'Fillmore';
  const e = new Intern ('Fred', 10, 'name@gmail.com', s);
  expect(e.school).toBe(s)
});

test('school via getSchool', () => {
    const s = 'Fillmore';
    const e = new Intern('Fred', 10, 'name@gmail.com', s);
    expect(e.school).toBe(s)
  });

test('role via getRole()', () => {
  const r = 'Intern';
  const e = new Intern (r);
  expect(e.getRole()).toBe(r)
});