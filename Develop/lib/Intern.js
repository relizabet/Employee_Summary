// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(em1, inA, inB) {
    super(em1, em2, em3);
    this.inA = inA;
    this.inB = inB;
  }
}

module.exports = Intern;
