const empQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your employees full name?",
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
    message: "What is their employee email?",
    default: "rachel@rachel.com",
  },
];

const intQuestions = [
  {
    type: "input",
    name: "school",
    message: "What school does your intern attend?",
    default: "UNH",
  },
];

module.exports = empQuestions;

module.exports = intQuestions;
