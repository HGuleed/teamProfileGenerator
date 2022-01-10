const { TestWatcher } = require("@jest/core");
const Employee = require("../lib/Employee");

const jeff = new Employee("jeff", 234, "jhg@Test.com");

//Testing of properties
it("should have properties of name, id, and email", () => {
  expect(jeff.name).toEqual("jeff");
  expect(jeff.id).not.toBeNaN();
  expect(typeof jeff.email).toBe("string");
});

it("should return the name property of the object", () => {
  expect(jeff.getName()).toEqual("jeff");
});

//Testing of methods
it("should return the id property", () => {
  // console.log(typeof jeff.getID());
  expect(typeof jeff.getID()).toBe("number");
});

it("should return the email property", () => {
  expect(typeof jeff.getEmail()).toBe("string");
});

it("should return employee", () => {
  expect(jeff.getRole()).toEqual("Employee");
});
