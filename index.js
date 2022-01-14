const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const {
  managerQuest,
  intOrEng,
  addEmployee,
  engineerQuest,
  internQuest,
} = require("./questionPrompts");

let internArr = [];
let manager;
function init() {
  inquirer.prompt(managerQuest).then((data) => {
    manager = new Manager(data.name, data.Id, data.email, data.officeNum);

    console.log(manager);

    addEmp();
  });
}

function addEmp() {
  inquirer.prompt(addEmployee).then((data) => {
    // console.log(data.addEmployee);
    if (data.addEmployee) {
      // console.log("Yes add an employee");
      addIntOrEng();
    } else {
      // fs.writeFile("./dist", generateHtml(data));
      console.log("no dont add an employee");
    }
  });
}

function addIntOrEng() {
  inquirer.prompt(intOrEng).then((data) => {
    if (data.intOrEng === "Intern") {
      addIntern();
    } else {
      addEngineer();
    }
  });
}

function addIntern() {
  inquirer.prompt(internQuest).then((data) => {
    console.log(data);
  });
}
function addEngineer() {
  inquirer.prompt(engineerQuest).then((data) => {
    console.log(data);
  });
}
init();
