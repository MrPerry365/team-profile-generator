// make a test for employee



// make a class for Employee for other classes to inherit name, id , email, and title From:

class Employee {
  constructor(name, id, email,) {
    this.name = name;
    this.id = id;
    this.email = email;
  
  }
  getEmployeeName() {
    return this.name;
  }
  getEmployeeId() {
    return this.id;
  }
  getEmployeeEmail() {
    return this.email;
  }
  getEmployeeRole() {
    return 'Employee';
  
}
}
module.exports = Employee;
