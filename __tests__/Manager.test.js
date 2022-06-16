const Manager = require("../lib/Manager.js");

const name = 'Elon Musk';
const id = '123';
const email = 'musk@gmail.com';
const officeNumber = '321';


describe("Manager", () => {

    test("creates an manager object with expected name", () => {
        const manager = new Manager(name, id, email, officeNumber);
    
        expect(manager.getEmployeeName()).toBe(name);
      });
    
      test("creates an manager object with expected id", () => {
        const manager = new Manager(name, id, email, officeNumber);
    
        expect(manager.getEmployeeId()).toBe(id);
      });
    
      test("creates a manager object with expected email", () => {
        const manager = new Manager(name, id, email, officeNumber);
    
        expect(manager.getEmployeeEmail()).toBe(email);
      });

    test("creates a new manager with office number", () => {
        const manager = new Manager (name, id, email, officeNumber);

        expect(manager.getEmployeeOfficeNumber()).toBe(officeNumber);
    })
})