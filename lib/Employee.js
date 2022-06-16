// make a test for employee

// class Employee(name = '') {
//     this.name = name;
// }

// module.exports = Employee;
// ------------------------------------------------------------------------------------------------------------------------

// make a class for Employee for other classes to inherit name, id , email, and title From:

class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
  
  }
  employeeName() {
    return this.name;
  }
  employeeId() {
    return this.id;
  }
  employeeEmail() {
    return this.email;
  }
    employeeRole() {
    return this.role;
  
}
}
module.exports = Employee;
