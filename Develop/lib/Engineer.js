// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }

  getGithub() {
    return `Github Username: ${this.github}`;
  }

  getRole() {
    return `Role: ${this}`;
  }
}

const rachel = new Engineer("1234", "Rachel", "r@r.com", "relizabet");

console.log(rachel);

module.exports = Engineer;
