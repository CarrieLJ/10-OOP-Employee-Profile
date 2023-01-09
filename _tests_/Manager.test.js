// const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


// test('engineer defined as object', () => {
//   const e = new Engineer();
//   expect(typeof(e)).toBe('object')
// });

test('officeNumber via constructor', () => {
    const o = 5;
    const e = new Manager('Fred', 10, 'name@gmail.com', 5);
    expect(e.officeNumber).toBe(o)
  });