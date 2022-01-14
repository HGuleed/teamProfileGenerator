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
    console.log(data);
    if (data.addEmployee === true) {
      console.log("Yes add an employee");
      // addIntOrEng();
    } else {
      // fs.writeFile("./dist", generateHtml(data));
      console.log("no dont add an employee");
    }
  });
}

//  function addIntOrEng(){
//    inquirer.prompt(intOrEng).then((data)=>{
//      if(data.intOrEng === "Intern"){

//      }
//    })
//  }

//  function addIntern(){
//    inquirer.prompt(internQuest).then((data)=>{

//    })
//  }
init();
