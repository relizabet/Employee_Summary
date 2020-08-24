// TODO: Write code to define and export the Employee class
class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getId() {
    console.log(id);
  }

  getName() {
    console.log(name);
  }

  getEmail() {
    console.log(email);
  }

  getRole() {
    console.log(role);
  }
}

module.exports = Employee;
