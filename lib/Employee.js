// make a test for employee

// class Employee(name = '') {
//     this.name = name;
// }

// module.exports = Employee;
// ------------------------------------------------------------------------------------------------------------------------

// make a class for Employee for other classes to inherit name, id , email, and title From:

class Employee {
  constructor(name, id, email, title) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = title;
  }
  get name() {
    return this.name;
  }
  get id() {
    return this.id;
  }
  get email() {
    return this.email;
  }
  get title() {
    return this.title;
  }
}
module.exports = Employee;
