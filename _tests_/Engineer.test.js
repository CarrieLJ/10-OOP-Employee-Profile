// const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


// test('engineer defined as object', () => {
//   const e = new Engineer();
//   expect(typeof(e)).toBe('object')
// });

test('github via constructor', () => {
    const g = 'https://github.com';
    const e = new Engineer(g);
    expect(e.github).toBe(g)
  });
  
