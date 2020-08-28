const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const empQuestions = require("./lib/questions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const newEmployee = [];

// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

async function getIntern() {
  try {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the interns full name?",
          default: "Jane Doe",
        },
        {
          type: "input",
          name: "id",
          message: "What is their employee id?",
          default: "1234",
        },
        {
          type: "input",
          name: "email",
          message: "What is the interns email address?",
          default: "rachel@rachel.com",
        },
        {
          type: "input",
          name: "school",
          message: "What school does your intern attend?",
          default: "UNH",
        },
        {
          type: "list",
          name: "more",
          message: "Would you like to add another employee?",
          choices: ["Yes", "No"],
        },
      ])
      .then(function (res) {
        addedEmployee = new Intern(res.name, res.id, res.email, res.school);
        newEmployee.push(addedEmployee);
        console.log(newEmployee);
      });
  } catch (err) {
    console.log(err);
  }
}

async function getManager() {
  try {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the managers full name?",
          default: "Jane Doe",
        },
        {
          type: "input",
          name: "id",
          message: "What is their employee id?",
          default: "1234",
        },
        {
          type: "input",
          name: "email",
          message: "What is the managers email address?",
          default: "rachel@rachel.com",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the managers office number?",
          default: "123-456-7890",
        },
        {
          type: "list",
          name: "more",
          message: "Would you like to add another employee?",
          choices: ["Yes", "No"],
        },
      ])
      .then(function (res) {
        addedEmployee = new Manager(
          res.name,
          res.id,
          res.email,
          res.officeNumber
        );
        newEmployee.push(addedEmployee);
        console.log(newEmployee);
        if (res.more === "Yes") {
          init();
        }
      });
  } catch (err) {
    console.log(err);
  }
}

async function getEngineer() {
  try {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the engineers full name?",
          default: "Jane Doe",
        },
        {
          type: "input",
          name: "id",
          message: "What is their employee id?",
          default: "1234",
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineers email address?",
          default: "rachel@rachel.com",
        },
        {
          type: "input",
          name: "github",
          message: "What is the engineers github username?",
          default: "relizabet",
        },
        {
          type: "list",
          name: "more",
          message: "Would you like to add another employee?",
          choices: ["Yes", "No"],
        },
      ])
      .then(function (res) {
        addedEmployee = new Engineer(res.name, res.id, res.email, res.github);
        newEmployee.push(addedEmployee);
        console.log(newEmployee);
        if (res.more === "Yes") {
          init();
        }
      });
  } catch (err) {
    console.log(err);
  }
}

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employee",
        message: "What type of employee would you like to add",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(function (res) {
      console.log(res.employee);
      if (res.employee === "Manager") {
        getManager();
      } else if (res.employee === "Intern") {
        getIntern();
      } else if (res.employee === "Engineer") {
        getEngineer();
      }
    });
}

init();

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location. Hint: you may need to check if the `output` folder exists and create it if it does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work! ```

// function askQuestions() {
//   // use inquirer to prompt the questions and (return) the answers
//   return inquirer.prompt(questions);
// }
