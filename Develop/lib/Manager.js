// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(em1, maA, maB) {
    super(em1, em2, em3);
    this.maA = maA;
    this.maB = maB;
  }
}

module.exports = Manager;
