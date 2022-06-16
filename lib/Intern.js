//extend Intern to employee class

class Intern extends Employee {
    constructor(name, id , email, role, school) {
        super(name, id, email,);
        this.role = 'intern';
        this.school = school;
}
}