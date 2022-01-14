//Questions for manager
const managerQuest = [
  { name: "name", type: "input", message: "What is the managers name?" },
  {
    type: "input",
    name: "Id",
    message: "What is the manager's employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "officeNum",
    message: "What is the manager's office number?",
  },
];
const internQuest = [
  { type: "input", name: "name", message: "What is the intern's name?" },
  {
    type: "input",
    name: "Id",
    message: "What is the intern's employee Id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
  },
];
const engineerQuest = [
  { type: "input", name: "name", message: "What is the engineer's name?" },
  {
    type: "input",
    name: "Id",
    message: "What is the engineer's employee Id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github username?",
  },
];

const addEmployee = {
  type: "confirm",
  name: "addEmployee",
  message: "Would you like to add an employee?",
};

const intOrEng = {
  type: "list",
  name: "intOrEng",
  message: "Would you like to add an Intern or Engineer?",
  choices: ["Intern", "Engineer"],
};

module.exports = {
  intOrEng,
  addEmployee,
  engineerQuest,
  internQuest,
  managerQuest,
};
