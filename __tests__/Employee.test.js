const Employee = require("../lib/Employee.js");

const name = 'Elon Musk';
const id = '123';
const email = 'musk@gmail.com';

describe("Employee", () => {
  test("creates an employee object with expected name", () => {
    const employee = new Employee(name, id, email);

    expect(employee.getEmployeeName()).toBe(name);
  });

  test("creates an employee object with expected id", () => {
    const employee = new Employee(name, id, email);

    expect(employee.getEmployeeId()).toBe(id);
  });

  test("creates an employee object with expected email", () => {
    const employee = new Employee(name, id, email);

    expect(employee.getEmployeeEmail()).toBe(email);
  });
});
