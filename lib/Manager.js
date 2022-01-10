const Employee = require(./Employee);

class Manager extends Employee {
  constructor(officeNum) {
    this.officeNumber = officeNum;
  }

  getRole() {
    return "Manager";
  }
};
module.exports = Manager;
