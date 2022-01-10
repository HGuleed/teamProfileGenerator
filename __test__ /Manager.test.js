const Manager = require("../lib/Manager");

const manager = new Manager("joe", 222, "test@test.com", 1054);

it("should have property of office number and getRole method", () => {
  expect(typeof manager.officeNumber).not.toBeNaN();
  expect(manager.getRole).toHaveReturnedWith("Manager");
});
