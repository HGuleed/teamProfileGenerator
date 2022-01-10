<<<<<<< HEAD
const Employee = require(./Employee);

=======
>>>>>>> feature/manager
class Manager extends Employee {
  constructor(officeNum) {
    this.officeNumber = officeNum;
  }

  getRole() {
    return "Manager";
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> feature/manager
module.exports = Manager;
