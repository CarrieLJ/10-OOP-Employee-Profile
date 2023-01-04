// const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


// test('engineer defined as object', () => {
//   const e = new Engineer();
//   expect(typeof(e)).toBe('object')
// });

test('officeNumber via constructor', () => {
    const o = 5;
    const e = new Manager(o);
    expect(e.officeNumber).toBe(o)
  });