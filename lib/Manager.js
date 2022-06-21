const Employee = require("../lib/Employee");

//extend Manager to employee class

class Manager extends Employee {
    constructor(name, id , email, officeNumber) {
        super (name, id , email)
        this.officeNumber = officeNumber
    }

    getEmployeeOfficeNumber() {
        return this.officeNumber;
    } 

    getEmployeeRole() {
        return 'Manager';
    }

    writeEmployeeCard() {
        return "<div>ManagerCard, " + this.name + ", " + this.id + ", " + this.email + ", " + this.officeNumber + "</div>";
    }
}

module.exports = Manager;
