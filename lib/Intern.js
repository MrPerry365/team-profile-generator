//extend Intern to employee class
const Employee = require("../lib/Employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getEmployeeSchool() {
    return this.school;
  }

  getEmployeeRole() {
    return 'Intern';
  }
}

module.exports = Intern;
