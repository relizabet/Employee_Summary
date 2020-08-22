// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(em1, enA, enB) {
    super(em1, em2, em3);
    this.enA = enA;
    this.enB = enB;
  }
}

module.exports = Engineer;
