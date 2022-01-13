const Engineer = require("../lib/Engineer");

const huda = new Engineer("huda", 444, "test@test.com", "HGuleed");

//Testing for properties
it("should have property of name, id, email, and office number", () => {
  expect(huda.name).toEqual("huda");
  expect(huda.id).not.toBeNaN();
  expect(typeof huda.email).toBe("string");
});

it("should return the name property of the object", () => {
  expect(huda.getName()).toEqual("huda");
});

//Testing of methods
it("should return the id property", () => {
  // console.log(typeof jeff.getID());
  expect(typeof huda.getID()).toBe("number");
});

it("should return the email property", () => {
  expect(typeof huda.getEmail()).toBe("string");
});

it("should return Engineer", () => {
  expect(huda.getRole()).toEqual("Engineer");
});
