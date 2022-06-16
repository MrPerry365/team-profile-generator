//extend engineer to employee class

const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, role) {
    super(name, id, email);
    this.github = github;
    this.role = "engineer";
  }
  engineerGithub() {
    return this.github;
  }
}

module.exports = Engineer;
