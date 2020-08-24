// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }

  getSchool() {
    console.log(school);
  }

  getRole() {
    // override for 'intern'
    console.log(role);
  }
}

module.exports = Intern;
