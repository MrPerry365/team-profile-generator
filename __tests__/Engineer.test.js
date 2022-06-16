const Engineer = require("../lib/Engineer");

const name = 'Elon Musk';
const id = '123';
const email = 'musk@gmail.com';
const github = 'http://github.com/mrperry365'

describe ("Engineer", () => {

    test("creates an engineer object with expected name", () => {
        const engineer = new Engineer(name, id, email, github);
    
        expect(engineer.getEmployeeName()).toBe(name);
      });
    
      test("creates an engineer object with expected id", () => {
        const engineer = new Engineer(name, id, email, github);
    
        expect(engineer.getEmployeeId()).toBe(id);
      });
    
      test("creates a engineer object with expected email", () => {
        const engineer = new Engineer(name, id, email, github);
    
        expect(engineer.getEmployeeEmail()).toBe(email);
      });

    test("creates a new Engineer object with a github", () => {
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.getEmployeeGithub()).toBe(github);


    })
});
