const Intern = require("../lib/Intern");

const sara = new Intern("sara", 333, "test@test.com", "OSU");

//Testing for properties
it("should have property of name, id, email, and office number", () => {
  expect(sara.name).toEqual("sara");
  expect(sara.id).not.toBeNaN();
  expect(typeof sara.email).toBe("string");
});

//Testing of methods
it("should return the name property of the object", () => {
  expect(sara.getName()).toEqual("sara");
});

it("should return the id property", () => {
  // console.log(typeof jeff.getID());
  expect(typeof sara.getID()).toBe("number");
});

it("should return the email property", () => {
  expect(typeof sara.getEmail()).toBe("string");
});

it("should return manager", () => {
  expect(sara.getRole()).toEqual("Intern");
});
