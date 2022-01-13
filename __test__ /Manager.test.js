const Manager = require("../lib/Manager");

const joe = new Manager("joe", 222, "test@test.com", 1054);

//Testing for properties
it("should have property of name, id, email, and office number", () => {
  expect(joe.name).toEqual("joe");
  expect(joe.id).not.toBeNaN();
  expect(typeof joe.email).toBe("string");
});

it("should return the name property of the object", () => {
  expect(joe.getName()).toEqual("joe");
});

//Testing of methods
it("should return the id property", () => {
  // console.log(typeof jeff.getID());
  expect(typeof joe.getID()).toBe("number");
});

it("should return the email property", () => {
  expect(typeof joe.getEmail()).toBe("string");
});

it("should return manager", () => {
  expect(joe.getRole()).toEqual("Manager");
});
