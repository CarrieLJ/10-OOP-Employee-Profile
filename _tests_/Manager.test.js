// const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


// test('engineer defined as object', () => {
//   const e = new Engineer();
//   expect(typeof(e)).toBe('object')
// });

test('officeNumber via constructor', () => {
    const o = 5;
    const e = new Manager('Fred', 10, 'name@gmail.com', o);
    expect(e.officeNumber).toBe(o)
  });

  test('role via getRole()', () => {
    const r = 'Manager';
    const e = new Manager (r);
    expect(e.getRole()).toBe(r)
  });