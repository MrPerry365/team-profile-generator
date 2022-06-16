//extend engineer to employee class

const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github,) {
    super(name, id, email);
    this.github = github;
    
  }
  getEmployeeGithub() {
    return this.github;
  }

  getEmployeeRole() {
    return 'Engineer';
  }


}

module.exports = Engineer;
