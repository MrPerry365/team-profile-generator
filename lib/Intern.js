//extend Intern to employee class
const Employee = require("../lib/Employee");
class Intern extends Employee {
  constructor(name, id, email, role, school) {
    super(name, id, email);
    this.role = "intern";
    this.school = school;
  }
  internSchool() {
    return this.school;
  }
}

module.exports = Intern;
