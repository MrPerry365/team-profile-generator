const Intern = require("../lib/Intern");

const name = 'Elon Musk';
const id = '123';
const email = 'musk@gmail.com';
const school = 'Community High';

describe("Intern", () => {
  test("creates an Intern object with an expected name", () => {
    const intern = new Intern(name, id, email, school);

    expect(intern.getEmployeeName()).toBe(name);
  });

  test("creates an Intern object with an expected id", () => {
    const intern = new Intern(name, id, email, school);

    expect(intern.getEmployeeId()).toBe(id);
  });

  test("creates an Intern object with an expected email", () => {
    const intern = new Intern(name, id, email, school);

    expect(intern.getEmployeeEmail()).toBe(email);
  });

  test("creates an Intern object with an expected school", () => {
    const intern = new Intern(name, id, email, school);

    expect(intern.getEmployeeSchool()).toBe(school);
  })
});
