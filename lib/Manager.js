const Employee = require("../lib/Employee");

//extend Manager to employee class

class Manager extends Employee {
    constructor(name, id , email, officeNumber) {
        super (name,id , email)
        this.officeNumber = officeNumber
    }

    getEmployeeOfficeNumber() {
        return this.officeNumber;
    } 

    getEmployeeRole() {
        return 'Manager';
    }
}

module.exports = Manager;
