// const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


// test('engineer defined as object', () => {
//   const e = new Engineer();
//   expect(typeof(e)).toBe('object')
// });

test('school via constructor', () => {
    const s = 'Fillmore';
    const e = new Intern('Fred', 10, 'name@gmail.com', 'Fillmore');
    expect(e.school).toBe(s)
  });