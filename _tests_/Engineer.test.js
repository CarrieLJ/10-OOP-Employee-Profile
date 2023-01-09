// const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


// test('engineer defined as object', () => {
//   const e = new Engineer();
//   expect(typeof(e)).toBe('object')
// });

test('github via constructor', () => {
  const h = 'CLJensen';
  const e = new Engineer ('Fred', 10, 'name@gmail.com', 'CLJensen');
  expect(e.github).toBe(h)
});

test('github via getGitHub', () => {
    const g = 'https://github.com';
    const e = new Engineer('Fred', 10, 'name@gmail.com', g);
    expect(e.github).toBe(g)
  });

  test('role via getRole()', () => {
    const r = 'Engineer';
    const e = new Engineer (Engineer);
    expect(e.getRole()).toBe(r)
  });
  
